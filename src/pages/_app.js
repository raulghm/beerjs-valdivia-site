import React, { useEffect } from 'react'
import '../styles/base.css'

// eslint-disable-next-line
export default function App ({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = 'es'
  })

  return <Component {...pageProps} />
}
