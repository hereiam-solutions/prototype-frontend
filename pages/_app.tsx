import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'ononline' in window && 'onoffline' in window) {
      setIsOnline(window.navigator.onLine)
      if (!window.ononline) {
        window.addEventListener('online', () => {
          setIsOnline(true)
        })
      }
      if (!window.onoffline) {
        window.addEventListener('offline', () => {
          setIsOnline(false)
        })
      }
    }
  }, [])

  const router = useRouter()
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined && isOnline) {
      // skip index route, because it's already cached under `start-url` caching object
      if (router.route !== '/') {
        const wb = window.workbox
        wb.active.then((worker: any) => {
          wb.messageSW({ action: 'CACHE_NEW_ROUTE' })
        })
      }
    }
  }, [isOnline, router.route])

  return <Component {...pageProps} />;
}

export default MyApp;
