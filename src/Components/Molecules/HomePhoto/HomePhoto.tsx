import React from 'react'
import { HomePhotoDiv, HomePhotoGrid } from './HomePhoto.styles'
import Image from 'next/image'



const HomePhoto = () => {

  return (
    <HomePhotoGrid item>
      <HomePhotoDiv
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <Image
            src="/images/me-bw.png"
            alt="home-me"
            layout='fill'
            objectFit='contain'
        >
        </Image>
      </HomePhotoDiv>
    </HomePhotoGrid>
    
  )
}

export default HomePhoto