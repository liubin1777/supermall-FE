import '../styles/globals.css'
import type { AppProps } from 'next/app'

console.log('[SuperMall] current env = ', process?.title);
console.log('[SuperMall] process.env.NODE_ENV = ', process.env.NODE_ENV);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
