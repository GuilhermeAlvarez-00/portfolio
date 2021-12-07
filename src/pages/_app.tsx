import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../styles/global'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Toaster } from 'react-hot-toast'
import NextNprogress from 'nextjs-progressbar'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NextNprogress 
        color={theme.pink500}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Header />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
