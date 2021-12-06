import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../styles/global'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Toaster } from 'react-hot-toast'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
