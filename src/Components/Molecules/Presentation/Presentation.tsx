import React, {useState, useEffect} from 'react'
import { Description } from '../../Atoms/Description'
import { Introduction } from '../../Atoms/Introduction'
import { Profession } from '../../Atoms/Profession'
import { Salution } from '../../Atoms/Salution'
import { PresentationGrid} from './Presentation.styles'
import { SocialMedias } from '../../Atoms/SocialMedias'
import {CTAbuttons} from '../../Atoms/CTAbuttons'
import { breakpoint } from '../../../Constants'

const Presentation = () => {

  
  return (
    <PresentationGrid id="presentation-grid" item md={6} xs={12}>
      <Salution></Salution>
      <Introduction></Introduction>
      <Profession></Profession>
      <Description></Description>
      <SocialMedias></SocialMedias>
      <CTAbuttons></CTAbuttons>
    </PresentationGrid>
  )
}

export default Presentation