import Head from 'next/head'
import '../globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Into the Void</title>
      <meta name="description" content="An interactive narrative - made for GT's LMC 2410" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
