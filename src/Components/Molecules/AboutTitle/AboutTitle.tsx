import React from 'react'
import { Divider, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { AboutTitleGrid, typographyStyle } from './AboutTitleGrid.styles'
import { theme } from '../../../styles'

const AboutTitle = () => {

  const {t} = useTranslation("about")
  return (
    <AboutTitleGrid item xs={12} container justifyContent="center">
      <div data-aos="fade-down" data-aos-duration="500">
        <Typography
          fontFamily={theme.typography.fontFamily.title}
          fontWeight="600"
          sx={typographyStyle}
          color={theme.palette.grey.A900}
        >
          {t("title")}
        </Typography>
        <Divider/>
      </div>
      
    </AboutTitleGrid>
  )
}

export default AboutTitle