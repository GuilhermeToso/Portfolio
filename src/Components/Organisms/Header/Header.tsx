import React, {useState} from 'react'
import { HeaderGrid } from './Header.styles'
import { Grid } from '@mui/material'
import { LogoSection } from '../../Molecules/LogoSection'
import { Nav } from '../../Molecules/Nav'
import { HeaderEmpty } from '../../Molecules/HeaderEmpty'
import { MenuBar } from '../../Molecules/MenuBar'
import { LanguageButton } from '../../Molecules/LanguageButton'
import { LanguageMenu } from '../../Molecules/LanguageMenu'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export interface LanguagesProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
}

export interface OpenBottomNavProps {
  openNav: React.Dispatch<React.SetStateAction<boolean>>;
  opened: boolean;
  tabValue: number;
  setTabValue: React.Dispatch<React.SetStateAction<number>>
}

const Header = (props:OpenBottomNavProps) => {

  const router = useRouter()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const languageStates: LanguagesProps = {
    anchorEl,
    setAnchorEl,
    open,
    handleClick,
    handleClose
  }

  return (
    <HeaderGrid item container xs={12}>
        <LogoSection setTabValue={props.setTabValue}></LogoSection>
        <Nav tabValue={props.tabValue} setTabValue={props.setTabValue} router={router}></Nav>
        <HeaderEmpty/>
        <MenuBar opened={props.opened} openNav={props.openNav}></MenuBar>
        <LanguageMenu states={languageStates} router={router}></LanguageMenu>
        <LanguageButton event={handleClick} open={open}></LanguageButton>
    </HeaderGrid>
  )
}

export default Header