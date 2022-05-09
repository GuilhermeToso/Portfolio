import React,{useContext} from 'react'
import { LogoGrid, LogoContainer, LogoBox, Link } from './LogoSection.styles'
import { RubricLogo } from '../../Atoms/Logo'
import { NavigationContext } from '../../../Contexts'

const LogoSection = () => {

  const {handleTabValue} = useContext(NavigationContext)

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
            handleTabValue(0)
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