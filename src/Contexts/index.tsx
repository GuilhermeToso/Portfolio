import React, {createContext, useState, useContext} from "react";
import { NavigationInterface } from "../Interfaces";

export const NavigationContextDefault: NavigationInterface = {
    openBottomNav:false,
    handleOpenBottomNav: () => null,
    tabValue: 0,
    handleTabValue: () => null
}

export const NavigationContext = createContext<NavigationInterface>(NavigationContextDefault)


export const useNavigationContext = () => {

    const [openBottomNav, setOpenBottomNav] = useState<boolean>(false)
    const [tabValue, setTabValue] = useState<number>(0) 
    
    function handleOpenBottomNav() {
        setOpenBottomNav(!openBottomNav)
    }

    function handleTabValue(newTabValue:number) {
        setTabValue(newTabValue)
    }

    const hooks: NavigationInterface = {
        openBottomNav:openBottomNav,
        handleOpenBottomNav:handleOpenBottomNav,
        tabValue:tabValue,
        handleTabValue:handleTabValue
    }

    return hooks
} 
