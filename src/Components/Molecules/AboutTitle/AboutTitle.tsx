import React from 'react'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { AboutTitleGrid, typographyStyle } from './AboutTitleGrid.styles'
import { theme } from '../../../styles'

const AboutTitle = () => {

  const {t} = useTranslation("about")
  return (
    <AboutTitleGrid item xs={12} container justifyContent="center">
      <div data-aos="flip-right">
        <Typography
          fontFamily={theme.typography.fontFamily.title}
          fontWeight="600"
          sx={typographyStyle}
          color="#333"
        >
          {t("title")}
        </Typography>
      </div>
      
    </AboutTitleGrid>
  )
}

export default AboutTitle