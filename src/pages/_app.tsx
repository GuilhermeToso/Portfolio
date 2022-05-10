import React, {useEffect} from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {appWithTranslation} from "next-i18next"
import AOS from "aos"

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    })
  }, [])
  

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
