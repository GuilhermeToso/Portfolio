import React from 'react'
import { motion } from 'framer-motion'
import { HomePhotoContainer, style, HomePhotoGrid } from './HomePhoto.styles'
import Image from 'next/image'



const HomePhoto = () => {

  const homePhotoVariants = {
    initial: {
      left: "50vw" ,
      opacity:"0"
    },
    animate: {
      opacity:1,
      left:"0vw",
      transition: {
        delay: 0.3, duration:2
      }
    }
  }

  return (
    <HomePhotoGrid item md={6} xs={12}>
      <motion.div
        variants={homePhotoVariants}
        initial="initial"
        animate="animate"
      style={style}
      >
        <HomePhotoContainer>
          <Image
              src="/images/me-bw.png"
              alt="home-me"
              layout='fill'
              objectFit='contain'
          >
          </Image>
        </HomePhotoContainer>
      </motion.div>
    </HomePhotoGrid>
    
  )
}

export default HomePhoto