import React from 'react'
import { LanguagesProps } from "../../Organisms/Header/Header"
import {Menu} from "./LanguageMenu.styles"
import {LanguageItem} from "../../Atoms/LanguageItem"
import { Grid } from '@mui/material'
import {NextRouter} from "next/router"

interface LanguageMenuProps {
    states: LanguagesProps;
    router: NextRouter;
}

const LanguageMenu = (props: LanguageMenuProps) => {

  const router = props.router

  const langItems = [
    {
      language: "عربي ar",
      locale:"ar"
    },
    {
      language: "Deutsch de-DE",
      locale:"de-DE"
    },
    {
      language: "English en-US",
      locale:"en-US"
    },
    {
      language: "Español es-ES",
      locale:"es-ES"
    },
    {
      language: "Français fr-CA",
      locale:"fr-CA"
    },
    {
      language: "Français fr-FR",
      locale:"fr-FR"
    },
    {
      language: "Italiano it-IT",
      locale:"it-IT"
    },
    {
      language: "日本 ja-JP",
      locale:"ja-JP"
    },
    {
      language: "Português pt-BR",
      locale:"pt-BR"
    },
    {
      language: "中国人 zh-CN",
      locale:"zh-CN"
    }
  ]

  return (
    <Grid item>
      <Menu
        anchorEl={props.states.anchorEl}
        open={props.states.open}
        onClose={props.states.handleClose}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {
          langItems.map((item:{language:string,locale:string})=>{
            return (
              <LanguageItem
                key={item.locale}
                onClick={props.states.handleClose}
                language={item.language}
                router={router}
                locale={item.locale}
              />
            )
          })
        }
      </Menu>
    </Grid>
  )
}

export default LanguageMenu