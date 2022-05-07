import React from 'react'
import { LogoGrid, LogoContainer, LogoBox, Link } from './LogoSection.styles'
import { NameLogo, RubricLogo } from '../../Atoms/Logo'

interface LogoProps {
  setTabValue: React.Dispatch<React.SetStateAction<number>>;
}
const LogoSection = (props: LogoProps) => {
  return (
    <LogoGrid item xs={2} container>
      <LogoContainer>
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={800}
          onClick = {() => {
            props.setTabValue(0)
          }}
        >
          <LogoBox >
            <RubricLogo></RubricLogo>
          </LogoBox>
        </Link>
      </LogoContainer>
    </LogoGrid>
  )
}

export default LogoSection