import {Tab} from '../Home_Page/Tab'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Tab> <Component {...pageProps} /></Tab>
}

export default MyApp
