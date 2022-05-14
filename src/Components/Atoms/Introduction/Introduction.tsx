import React from 'react'
import { typographyStyles } from './Introduction.styles'
import { Typography } from '@mui/material'
import { theme } from '../../../styles'
import { PresentationElement } from '../../Styles'

const Introduction = () => {

  return (
    <PresentationElement
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <Typography
        fontFamily={theme.typography.fontFamily.title}
        fontWeight="600"
        color={theme.palette.grey.A900}
        sx={typographyStyles}
        align="left"
      >
        GUILHERME M. TOSO
      </Typography>
    </PresentationElement>
  )
}

export default Introduction