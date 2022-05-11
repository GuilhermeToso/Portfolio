import type { NextPage } from 'next'
import { Template } from '../Components/Templates'
import {serverSideTranslations} from "next-i18next/serverSideTranslations"


export async function getStaticProps({locale}:{locale:string}) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'home','about']),
    }
  }
}

const Home: NextPage = () => {
  return (
    <Template></Template>
  )
}

export default Home
