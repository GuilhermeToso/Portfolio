import Image from 'next/image'
import React from 'react'
import { HomePhoto } from '../../Molecules/HomePhoto'
import { PageGrid } from '../Styles'
import { Presentation } from '../../Molecules/Presentation'


const Home = () => {
  
  return (
    <PageGrid item container top="0%" id='home'>
      <Presentation></Presentation>
      <HomePhoto></HomePhoto>
      <Image
          src="/images/bg-bw.jpg"
          alt='background-image'
          layout='fill'
          objectFit="cover"
          style={{zIndex:"-1"}}
        />  
    </PageGrid>
  )
}

export default Home