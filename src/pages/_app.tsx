import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'
import { GlobalStyles } from '../styles/global'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
