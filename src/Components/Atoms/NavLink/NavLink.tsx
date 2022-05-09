import React, {useContext} from 'react'
import { Link } from "react-scroll"
import {NavTab} from "./NavLink.styles"
import { NavigationContext } from '../../../Contexts'

interface NavLinkProps {
    to:string; 
    label:string;
    state:number
}

const NavLink = (props: NavLinkProps) => {
  
  const {handleTabValue} = useContext(NavigationContext)
  
  return (
    <Link
        to={props.to}
        spy={true} 
        smooth={true} 
        offset={50} 
        duration={500}
        onClick={()=>{handleTabValue(props.state)}}
    >
      <NavTab label={props.label} />
    </Link>
  )
}

export default NavLink