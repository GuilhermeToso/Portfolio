import React from 'react'
import { Description } from '../../Atoms/Description'
import { Introduction } from '../../Atoms/Introduction'
import { Profession } from '../../Atoms/Profession'
import { Salution } from '../../Atoms/Salution'
import { PresentationBox, PresentationGrid} from './Presentation.styles'
import { SocialMedias } from '../../Atoms/SocialMedias'
import {CTAbuttons} from '../../Atoms/CTAbuttons'

const Presentation = () => {

  
  return (
    <PresentationGrid id="presentation-grid" item>
      <PresentationBox>
        <Salution></Salution>
        <Introduction></Introduction>
        <Profession></Profession>
        <Description></Description>
        <SocialMedias></SocialMedias>
        <CTAbuttons></CTAbuttons>
      </PresentationBox>
    </PresentationGrid>
  )
}

export default Presentation