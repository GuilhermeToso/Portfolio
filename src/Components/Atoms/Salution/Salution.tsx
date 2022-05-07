import React from 'react'
import { SalutionBox, typographyStyles } from './Salution.styles'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import {Typography} from "@mui/material"
import { theme } from '../../../styles'

const Salution = () => {

  const variations = {
      hidden:{
          opacity: 0,
          left:"0%"
      },
      visible:{
        opacity: 1,
        left:"15%",
        transition:{
            delay:0.2,
            duration:1
        }
    }
  }

  const {t} = useTranslation("home")
  
  return (
    <SalutionBox>
        <motion.div
            variants={variations}
            initial="hidden"
            animate="visible"
            style={{position:"relative", width: '85%'}}
        >
          <Typography
            fontFamily={theme.typography.fontFamily.title}
            color="#333"
            align="left"
            sx={typographyStyles}
          >
            {t("salution")}
          </Typography>
        </motion.div>
    </SalutionBox>
  )
}

export default Salution