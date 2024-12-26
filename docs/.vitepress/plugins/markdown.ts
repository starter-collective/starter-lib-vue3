import type MarkdownIt from 'markdown-it'
import type Renderer from 'markdown-it/lib/renderer.mjs'
import type Token from 'markdown-it/lib/token.mjs'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import markdownItContainer from 'markdown-it-container'
import { createHighlighter } from 'shiki'

interface ContainerOpts {
  marker?: string
  validate?: (params: string) => boolean
  render?: (
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ) => string
}

export async function MarkdownPlugin(md: MarkdownIt): Promise<void> {
  const highlighter = await createHighlighter({
    themes: ['github-light', 'github-dark'],
    langs: ['vue', 'vue-html', 'typescript', 'javascript'],
  })

  md.use(markdownItContainer, 'example', {
    validate(params) {
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      return !!params.trim().match(/^example\s*(.*)$/)
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        let source = ''
        const sourceFileToken = tokens[idx + 2]
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        if (sourceFileToken.type === 'inline') {
          source = readFileSync(
            resolve(cwd(), 'docs/examples', `${sourceFile}.vue`),
            'utf-8',
          )
        }
        if (!source) {
          throw new Error(`Incorrect source file: ${sourceFile}`)
        }
        const shikiSource = highlighter.codeToHtml(source, {
          lang: 'vue',
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
        })
        return `<Example source="${encodeURIComponent(shikiSource)}" path="${sourceFile}" raw-source="${encodeURIComponent(source)}">`
      }
      else {
        return '</Example>'
      }
    },
  } as ContainerOpts)
}
