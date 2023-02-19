'use client'
import { CacheProvider } from '@emotion/react'
import { MantineProvider, useEmotionCache } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { ModalSubscribeSuccess } from '@sipilot/components/Modals'
import { theme } from '@sipilot/configs/mantine'
import { getCookie } from 'cookies-next'
import NextApp, { AppContext } from 'next/app'
import { useServerInsertedHTML } from 'next/navigation'

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const cache = useEmotionCache()
  cache.compat = true

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ))

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <ModalsProvider
          modals={{
            subscribeSuccess: ModalSubscribeSuccess,
          }}
          modalProps={{
            centered: true,
            transition: 'fade',
          }}
        >
          {children}
        </ModalsProvider>
      </MantineProvider>
    </CacheProvider>
  )
}

RootStyleRegistry.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  }
}
