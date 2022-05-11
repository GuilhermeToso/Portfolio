import React from 'react'
import { HeaderGrid } from './Header.styles'
import { LogoSection } from '../../Molecules/LogoSection'
import { Nav } from '../../Molecules/Nav'
import { HeaderEmpty } from '../../Molecules/HeaderEmpty'
import { MenuBar } from '../../Molecules/MenuBar'
import { LanguageButton } from '../../Molecules/LanguageButton'
import { LanguageMenu } from '../../Molecules/LanguageMenu'
import { useRouter } from 'next/router'

export interface LanguagesProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
}


const Header = () => {

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
        <LogoSection></LogoSection>
        <Nav router={router}></Nav>
        <HeaderEmpty/>
        <MenuBar></MenuBar>
        <LanguageMenu states={languageStates} router={router}></LanguageMenu>
        <LanguageButton event={handleClick} open={open}></LanguageButton>
    </HeaderGrid>
  )
}

export default Header