import React, {useContext} from 'react'
import { CTAbuttonsBox, styles, CTAButton, CTAButtonText, buttonStyle } from './CTAbuttons.styles'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import DownloadIcon from '@mui/icons-material/Download';
import { theme } from '../../../styles';
import { Link } from "react-scroll"
import { NavigationContext } from '../../../Contexts';

const CTAbuttons = () => {

  const variations = {
      hidden:{
          opacity: 0,
          left:"0%"
      },
      visible:{
        opacity: 1,
        left:"15%",
        transition:{
            delay:1.2,
            duration:1
        }
    }
  }
  
  const {t} = useTranslation("home")
  const {handleTabValue} = useContext(NavigationContext)

  return (
    <CTAbuttonsBox>
        <motion.div
            variants={variations}
            initial="hidden"
            animate="visible"
            style={styles}
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
                >
                  {t("lets_talk")}
                </CTAButtonText>
              </Link>
            </CTAButton>
        </motion.div>
    </CTAbuttonsBox>
  )
}

export default CTAbuttons