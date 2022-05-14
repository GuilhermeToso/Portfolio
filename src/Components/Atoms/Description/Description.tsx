import React from 'react'
import { typographyStyles } from './Description.styles'
import { useTranslation } from 'next-i18next'
import { Typography } from '@mui/material'
import { theme } from '../../../styles'
import { PresentationElement } from '../../Styles'

const Description = () => {

  const {t} = useTranslation("home")
  
  return (
    <PresentationElement
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="600"
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
    </PresentationElement>
  )
}

export default Description