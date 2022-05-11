import React,{useContext} from 'react'
import { LogoGrid, LogoBox, Link } from './LogoSection.styles'
import { RubricLogo } from '../../Atoms/Logo'
import { NavigationContext } from '../../../Contexts'
import { Container } from '@mui/material'

const LogoSection = () => {

  const {handleTabValue} = useContext(NavigationContext)

  return (
    <LogoGrid item xs={2} container>
      <Container>
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={0} 
          duration={800}
          onClick = {() => {
            handleTabValue(0)
          }}
        >
          <LogoBox >
            <RubricLogo></RubricLogo>
          </LogoBox>
        </Link>
      </Container>
    </LogoGrid>
  )
}

export default LogoSection