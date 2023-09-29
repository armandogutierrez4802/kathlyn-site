import '@/styles/globals.css'

// Font awesome imports
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
