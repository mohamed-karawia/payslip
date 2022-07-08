import Head from 'next/head'
import '../styles/globals.css'
import PayslipContextProvider from '../contexts/payslipContext'
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#14859d',
}

function MyApp({ Component, pageProps }) {
  return (
    <PayslipContextProvider>
      <ThemeProvider theme={theme}>
      <Head>
        <title>Calculate Payslip</title>
      </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </PayslipContextProvider>
  )
}

export default MyApp
