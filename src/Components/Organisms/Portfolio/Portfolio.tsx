import React from 'react'
import { PageGrid } from '../Styles'
import { Typography } from '@mui/material'

const Portfolio = () => {
  return (
    <PageGrid item height="100vh" id='portfolio'>
      <Typography
        variant='h3'
        fontFamily='Archivo'
      >
        Portfolio
      </Typography>
    </PageGrid>
    )
}

export default Portfolio