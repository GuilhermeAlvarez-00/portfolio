import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { theme } from '../styles/theme'
import { GlobalStyles } from '../styles/global'
import '../styles/swiperStyles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NextNprogress
        color={theme.pink500}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
