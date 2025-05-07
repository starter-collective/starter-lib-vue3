import type { Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'
import cssnano from 'cssnano'
import postcss from 'postcss'

interface PluginOptions {
  target: string
  formats?: string[]
  fileName?: string
}

function plugin(options: PluginOptions): Plugin {
  return {
    name: 'vite-plugin-bundle-styles',
    enforce: 'post',
    async generateBundle() {
      const cssFiles: string[] = []
      const srcDir = path.resolve(cwd(), options.target)
      const formats = options.formats || ['css', 'scss', 'sass', 'less']

      function collectCssFiles(dir: string): void {
        const files = fs.readdirSync(dir)
        for (const file of files) {
          const fullPath = path.join(dir, file)
          const stat = fs.statSync(fullPath)
          if (stat.isDirectory()) {
            collectCssFiles(fullPath)
          }
          else if (formats.some(ext => file.endsWith(`.${ext}`))) {
            cssFiles.push(fullPath)
          }
        }
      }

      collectCssFiles(srcDir)

      const combinedCss = cssFiles
        .map(file => fs.readFileSync(file, 'utf-8'))
        .join('\n')

      const result = await postcss([cssnano]).process(combinedCss, { from: undefined })
      const compressedCss = result.css

      const outputFileName = options.fileName || 'styles.css'
      this.emitFile({
        type: 'asset',
        fileName: outputFileName,
        source: compressedCss,
      })
    },
  }
}

export default plugin
export { plugin as vitePluginBundleStyles }
