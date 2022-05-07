import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { Home } from '../Organisms/Home'
import { Header } from '../Organisms/Header'
import { About } from '../Organisms/About'
import { Skills } from '../Organisms/Skills'
import { Portfolio } from '../Organisms/Portfolio'
import { Services } from '../Organisms/Services'
import { Contact } from '../Organisms/Contact'
import { BottomNav } from "../Organisms/BottomNav"

const Template = () => {

  const [openBottomNav, setOpenBottomNav] = useState(false)
  const [tabValue, setTabValue] = useState<number>(0)

  return (
    <Grid container>
      <Header opened={openBottomNav} openNav={setOpenBottomNav} tabValue={tabValue} setTabValue={setTabValue}></Header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <BottomNav opened={openBottomNav} tabValue={tabValue} setTabValue={setTabValue}></BottomNav>
    </Grid>
  )
}

export default Template