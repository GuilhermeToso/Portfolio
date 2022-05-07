import React from 'react'
import { MenuBarGrid, IconButton, WidgetIcon } from './MenuBar.styles'

interface MenuBarProps {
  openNav: React.Dispatch<React.SetStateAction<boolean>>;
  opened: boolean;
}
const MenuBar = (props:MenuBarProps) => {

  function handleClick() {
    props.openNav(!props.opened)
    console.log(props.opened)
  }

  return (
    <MenuBarGrid item md={0} xs={1} justifyItems="center" justifyContent="center">
        <IconButton disableRipple onClick={handleClick}> 
            <WidgetIcon></WidgetIcon>
        </IconButton>
    </MenuBarGrid>
  )
}

export default MenuBar