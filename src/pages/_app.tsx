import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'
import { GlobalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
