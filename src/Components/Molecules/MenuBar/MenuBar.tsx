import React, {useContext} from 'react'
import { NavigationContext } from '../../../Contexts'
import { MenuBarGrid, IconButton, WidgetIcon } from './MenuBar.styles'


const MenuBar = () => {

  const {openBottomNav, handleOpenBottomNav} = useContext(NavigationContext)


  return (
    <MenuBarGrid item md={0} xs={1} justifyItems="center" justifyContent="center">
        <IconButton disableRipple onClick={handleOpenBottomNav}> 
            <WidgetIcon></WidgetIcon>
        </IconButton>
    </MenuBarGrid>
  )
}

export default MenuBar