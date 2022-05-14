import React from 'react'
import { PageGrid } from '../Styles'
import { AboutTitle } from '../../Molecules/AboutTitle'
import { AboutPhoto } from '../../Molecules/AboutPhoto'
import { AboutDescription } from '../../Molecules/AboutDescription'
import { AboutContentGrid, Divide, pageGridStyles } from './About.styles'
import { Grid } from '@mui/material'

const About = () => {
  return (
    <PageGrid item id='about' container sx={pageGridStyles}>
      <AboutTitle></AboutTitle>
      <AboutContentGrid item xs={12} container>
        <AboutPhoto></AboutPhoto>
        <Grid item xs={12} md={0.5} container justifyContent="center" justifyItems="center" >
          <Divide></Divide>
        </Grid>
        <AboutDescription></AboutDescription>
      </AboutContentGrid>  
    </PageGrid>
    )
}

export default About