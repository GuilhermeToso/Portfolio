import React from 'react'
import { SocialMediasBox, styles, iconsStyle, socialMediaStyles } from './SocialMedias.styles'
import { motion } from 'framer-motion'
import { ButtonGroup, IconButton} from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


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
                aria-label="linkedin"
                size='large'
                sx={socialMediaStyles}
                href='https://www.linkedin.com/in/guilherme-toso/'
              >
                <LinkedInIcon sx={iconsStyle}/>
              </IconButton>
              <IconButton
                color="primary" 
                aria-label="github repository"
                size='large'
                sx={socialMediaStyles}
                href='https://github.com/GuilhermeToso'
              >
                <GitHubIcon sx={iconsStyle}/>
              </IconButton>
              <IconButton
                color="primary" 
                aria-label="instagram"
                size='large'
                sx={socialMediaStyles}
                href="https://www.instagram.com/guilhermetoso/"
              >
                <InstagramIcon sx={iconsStyle}/>
              </IconButton>
              <IconButton
                color="primary" 
                aria-label="facebook"
                size='large'
                sx={socialMediaStyles}
                href="https://www.facebook.com"
              >
                <FacebookOutlinedIcon sx={iconsStyle}/>
              </IconButton>
            </ButtonGroup>
        </motion.div>
    </SocialMediasBox>
  )
}

export default SocialMedias