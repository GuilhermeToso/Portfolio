import React, {useContext} from 'react'
import { CTAButton, CTAButtonText, buttonStyle, presentationStyle } from './CTAbuttons.styles'
import { useTranslation } from 'next-i18next'
import DownloadIcon from '@mui/icons-material/Download';
import { theme } from '../../../styles';
import { Link } from "react-scroll"
import { NavigationContext } from '../../../Contexts';
import { PresentationElement } from '../../Styles';
import { ButtonGroup } from '@mui/material';


const CTAbuttons = () => {

  const {t} = useTranslation("home")
  const {handleTabValue} = useContext(NavigationContext)

  return (
    <PresentationElement 
      sx={presentationStyle}   
    >
      <CTAButton
        variant="outlined"
        endIcon={<DownloadIcon></DownloadIcon>}
        href="/documents/cv.pdf"
        sx={buttonStyle}
      >
        <CTAButtonText
          fontFamily={theme.typography.fontFamily.title}
          fontWeight="600"
          align='center'
        >
          {t("cta_button")}
        </CTAButtonText>
      </CTAButton>
      <div style={{width:"10px"}}></div>
      <CTAButton
        variant="contained"
        sx={buttonStyle}
      >
        <Link
          to="about"
          spy={true} 
          smooth={true} 
          offset={0} 
          duration={500}
          onClick={()=>{handleTabValue(1)}}
        >
          <CTAButtonText
            fontFamily={theme.typography.fontFamily.title}
            fontWeight="600"
            color="#fff"
          >
            {t("lets_talk")}
          </CTAButtonText>
        </Link>
      </CTAButton>
    </PresentationElement>
  )
}

export default CTAbuttons