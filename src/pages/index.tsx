import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Template } from '../Components/Templates'
import {serverSideTranslations} from "next-i18next/serverSideTranslations"


export async function getStaticProps({locale}:{locale:string}) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'home']),
    }
  }
}

const Home: NextPage = () => {
  return (
    <Template></Template>
  )
}

export default Home
