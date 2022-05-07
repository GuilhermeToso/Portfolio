import React from 'react'
import { SocialMediasBox, styles } from './SocialMedias.styles'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { ButtonGroup, IconButton, Button } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material'


const SocialMedias = () => {

  const variations = {
      hidden:{
          opacity: 0,
          left:"0%"
      },
      visible:{
        opacity: 1,
        left:"15%",
        transition:{
            delay:1,
            duration:1
        }
    }
  }
  
  return (
    <SocialMediasBox>
        <motion.div
            variants={variations}
            initial="hidden"
            animate="visible"
            style={styles}
        >

            <ButtonGroup
              size='large'
            >
                <IconButton
                color="primary" 
                aria-label="facebook"
                size='large'
                sx={{zIndex:"1"}}
                href="https://www.facebook.com"
                >
                  <FacebookOutlinedIcon></FacebookOutlinedIcon>
                </IconButton>
              <IconButton
              color="primary" 
              aria-label="instagram"
              size='large'
              sx={{zIndex:"1"}}
              href="https://www.instagram.com/guilhermetoso/"
              >
                <InstagramIcon></InstagramIcon>
              </IconButton>
              <IconButton
              color="primary" 
              aria-label="github repository"
              size='large'
              sx={{zIndex:"1"}}
              href='https://github.com/GuilhermeToso'
              >
                <GitHubIcon/>
              </IconButton>
              <IconButton
              color="primary" 
              aria-label="linkedin"
              size='large'
              sx={{zIndex:"1"}}
              href='https://www.linkedin.com/in/guilherme-toso/'
              >
                <LinkedInIcon></LinkedInIcon>
              </IconButton>
            </ButtonGroup>
        </motion.div>
    </SocialMediasBox>
  )
}

export default SocialMedias