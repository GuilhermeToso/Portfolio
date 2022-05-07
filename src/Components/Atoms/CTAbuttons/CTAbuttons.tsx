import React from 'react'
import { CTAbuttonsBox, styles, CTAButton, CTAButtonText } from './CTAbuttons.styles'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import DownloadIcon from '@mui/icons-material/Download';
import { theme } from '../../../styles';

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

  return (
    <CTAbuttonsBox>
        <motion.div
            variants={variations}
            initial="hidden"
            animate="visible"
            style={styles}
        >
            <CTAButton
              variant="contained"
              endIcon={<DownloadIcon></DownloadIcon>}
              href="/documents/cv.pdf"
              sx={{zIndex:"1"}}
            >
              <CTAButtonText
                fontFamily={theme.typography.fontFamily.title}
                fontWeight="600"
              >
                {t("cta_button")}
              </CTAButtonText>
            </CTAButton>
            <div style={{width:"10px"}}></div>
            <CTAButton
              variant="contained"
              sx={{zIndex:"1"}}
            >
              <CTAButtonText
                fontFamily={theme.typography.fontFamily.title}
                fontWeight="600"
              >
                {t("lets_talk")}
              </CTAButtonText>
            </CTAButton>
        </motion.div>
    </CTAbuttonsBox>
  )
}

export default CTAbuttons