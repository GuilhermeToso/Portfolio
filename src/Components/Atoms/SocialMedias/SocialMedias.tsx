import React from 'react'
import { iconsStyle, socialMediaStyles, presentationStyle } from './SocialMedias.styles'
import { ButtonGroup, IconButton} from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PresentationElement } from '../../Styles';


const SocialMedias = () => {

  return (
    <PresentationElement
      sx={presentationStyle}
    >
      <ButtonGroup
        size='large'
      >
        <IconButton
          aria-label="linkedin"
          size='large'
          sx={socialMediaStyles}
          href='https://www.linkedin.com/in/guilherme-toso/'
        >
          <LinkedInIcon sx={iconsStyle}/>
        </IconButton>
        <IconButton
          aria-label="github repository"
          size='large'
          sx={socialMediaStyles}
          href='https://github.com/GuilhermeToso'
        >
          <GitHubIcon sx={iconsStyle}/>
        </IconButton>
        <IconButton
          aria-label="instagram"
          size='large'
          sx={socialMediaStyles}
          href="https://www.instagram.com/guilhermetoso/"
        >
          <InstagramIcon sx={iconsStyle}/>
        </IconButton>
        <IconButton
          aria-label="facebook"
          size='large'
          sx={socialMediaStyles}
          href="https://www.facebook.com"
        >
          <FacebookOutlinedIcon sx={iconsStyle}/>
        </IconButton>
      </ButtonGroup>
    </PresentationElement>
  )
}

export default SocialMedias