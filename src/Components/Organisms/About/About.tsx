import React from 'react'
import { PageGrid } from '../Styles'
import { AboutTitle } from '../../Molecules/AboutTitle'
import { AboutPhoto } from '../../Molecules/AboutPhoto'
import { AboutDescription } from '../../Molecules/AboutDescription'

const About = () => {
  return (
    <PageGrid item height="100vh" id='about' container>
      <AboutTitle></AboutTitle>
      <AboutPhoto></AboutPhoto>
      <AboutDescription></AboutDescription>
    </PageGrid>
    )
}

export default About