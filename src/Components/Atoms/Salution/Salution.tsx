import React from 'react'
import { typographyStyles } from './Salution.styles'
import { useTranslation } from 'next-i18next'
import {Typography} from "@mui/material"
import { theme } from '../../../styles'
import { PresentationElement } from '../../Styles'

const Salution = () => {

  const {t} = useTranslation("home")
  
  return (
    <PresentationElement 
      data-aos="fade-right" 
      data-aos-duration="1000"
    >
      <Typography
        fontFamily={theme.typography.fontFamily.title}
        color={theme.palette.grey.A800}
        align="left"
        sx={typographyStyles}
      >
        {t("salution")}
      </Typography>
    </PresentationElement>
  )
}

export default Salution