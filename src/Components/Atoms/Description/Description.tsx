import React from 'react'
import { DescriptionBox, typographyStyles } from './Description.styles'
import { useTranslation } from 'next-i18next'
import { motion, MotionStyle } from 'framer-motion'
import { Typography } from '@mui/material'
import { theme } from '../../../styles'

const Description = () => {

  const variations = {
      hidden:{
          opacity: 0,
          left:"0%"
      },
      visible:{
        opacity: 1,
        left:"15%",
        transition:{
            delay:0.8,
            duration:1
        }
    }
  }

  const styles: MotionStyle = {
    position:"relative",
    width:"75%", 
    height:"100%"
}

  const {t} = useTranslation("home")
  
  return (
    <DescriptionBox>
        <motion.div
            variants={variations}
            initial="hidden"
            animate="visible"
            style={styles}
        >
          <Typography
            fontFamily={theme.typography.fontFamily.text}
            fontWeight="300"
            color={theme.palette.grey.A700}
            sx={typographyStyles}
            align="left"
          >
            {t("description")}
          </Typography>
        </motion.div>
    </DescriptionBox>
  )
}

export default Description