import React from 'react'
import { ProfessionBox, typographyStyles } from './Profession.styles'
import { useTranslation } from 'next-i18next'
import { motion, MotionStyle } from 'framer-motion'
import { Typography } from '@mui/material'
import { theme } from '../../../styles'

const Profession = () => {

  const variations = {
      hidden:{
          opacity: 0,
          left:"0%"
      },
      visible:{
        opacity: 1,
        left:"15%",
        transition:{
            delay:0.6,
            duration:1
        }
    }
  }

  const styles: MotionStyle = {
    position:"relative",
    width:"85%", 
    height:"100%"
}

  const {t} = useTranslation("home")
  
  return (
    <ProfessionBox>
        <motion.div
            variants={variations}
            initial="hidden"
            animate="visible"
            style={styles}
        >
          <Typography
            fontFamily={theme.typography.fontFamily.title}
            color="#444"
            sx={typographyStyles}
            align="left"
          >
            {t("profession")}
          </Typography>
        </motion.div>
    </ProfessionBox>
  )
}

export default Profession