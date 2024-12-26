import theme from 'vitepress/theme'
import { Example } from '../components'
import './style.css'

export default {
  ...theme,
  enhanceApp({ app }) {
    app.component('Example', Example)
  },
}
