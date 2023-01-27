import { ColorScheme } from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
// import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
