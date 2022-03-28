import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { GlobalStyles } from '../styles/global'

import { theme } from '../styles/theme'

import '../styles/swiperStyles.css'

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
