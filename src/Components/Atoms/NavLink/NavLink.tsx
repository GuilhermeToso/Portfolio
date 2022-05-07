import React from 'react'
import { Link } from "react-scroll"
import { Tab } from '@mui/material'
import {NavTab} from "./NavLink.styles"

interface NavLinkProps {
    to:string; 
    label:string;
    state:number;
    setTabValue: React.Dispatch<React.SetStateAction<number>>;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <Link
        to={props.to}
        spy={true} 
        smooth={true} 
        offset={50} 
        duration={500}
        onClick={()=>{props.setTabValue(props.state)}}
    >
      <NavTab label={props.label} />
    </Link>
  )
}

export default NavLink