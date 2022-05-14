import React from 'react'
import { typographyStyles } from './Profession.styles'
import { useTranslation } from 'next-i18next'
import { Typography } from '@mui/material'
import { theme } from '../../../styles'
import {PresentationElement} from "../../Styles"

const Profession = () => {

  const {t} = useTranslation("home")
  
  return (
    <PresentationElement
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      <Typography
        fontFamily={theme.typography.fontFamily.title}
        color={theme.palette.grey.A800}
        sx={typographyStyles}
        align="left"
      >
        {t("profession")}
      </Typography>
    </PresentationElement>
  )
}

export default Profession