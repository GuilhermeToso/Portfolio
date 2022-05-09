import React from 'react'
import { Grid } from '@mui/material'
import { Home } from '../Organisms/Home'
import { Header } from '../Organisms/Header'
import { About } from '../Organisms/About'
import { Skills } from '../Organisms/Skills'
import { Portfolio } from '../Organisms/Portfolio'
import { Services } from '../Organisms/Services'
import { Contact } from '../Organisms/Contact'
import { BottomNav } from "../Organisms/BottomNav"
import { NavigationContext, useNavigationContext } from '../../Contexts'

const Template = () => {

  const values = useNavigationContext()

  return (
    <NavigationContext.Provider value={values}>
      <Grid container>
        <Header></Header>
        <Home ></Home>
        <About></About>
        <Portfolio></Portfolio>
        <Skills></Skills>
        <Services></Services>
        <Contact></Contact>
        <BottomNav></BottomNav>
      </Grid>
    </NavigationContext.Provider>
    
  )
}

export default Template