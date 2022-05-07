import React from 'react'
import { BottomNavBox, BottomNavPaper, styles, BottomNavGrid } from './BottomNav.styles'
import {motion} from "framer-motion"
import { BottomNavigation, Grid, Typography, ButtonBase, Divider } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import { Link } from "react-scroll";
import { UilEstate, UilUser, UilBagAlt, UilWrench, UilFileAlt, UilMessage } from '@iconscout/react-unicons'

interface BottomNavProps {
    opened: boolean;
    tabValue: number;
    setTabValue: React.Dispatch<React.SetStateAction<number>>
}

const BottomNav = (props:BottomNavProps) => {

  const variants = {
      show: {
        height:"100%",
        top:"0%",
        opacity:1,
        transition: { duration: 0.5 }
      },
      notShow:{
        height:"0%",
        top:"100%",
        opacity:0,
        transition: { duration: 0.5 }
      }
  }

  const navLinksUp = [
      {
        to:"home",
        text:"Home",
        icon:<UilEstate/>
      },
      {
        to:"about",
        text:"About",
        icon:<UilUser/>
      },
      {
        to:"skills",
        text:"Skills",
        icon:<UilWrench/>
      },]
    const navLinksDown = [
      {
        to:"services",
        text:"Services",
        icon:<UilBagAlt/>
      },
      {
        to:"portfolio",
        text:"Portfolio",
        icon:<UilFileAlt/>
      },
      {
        to:"contact",
        text:"Contact",
        icon:<UilMessage/>
      },
  ]


  return (
      <BottomNavBox>
        <motion.div
            variants={variants}
            animate={props.opened ? 'show' : 'notShow'}
            style={styles}
        >
            <BottomNavPaper elevation={16}>

                <BottomNavGrid container spacing={2} justifyContent="space-around" sx={{borderRadius:"25px 25px 0 0"}}>
                    {
                        navLinksUp.map((item:{to:string,text:string,icon:React.Node}) => {
                            return (
                                <Grid key={item.to} item xs={4} container justifyContent="center" justifyItems="center">
                                    <ButtonBase disableRipple>
                                        <Link
                                            to={item.to} spy={true} smooth={true} offset={50} 
                                            duration={500} onClick={()=>{props.setTabValue(props.tabValue)}}
                                        >
                                            {item.icon}
                                            <Typography variant='body1'>{item.text}</Typography>
                                        </Link>
                                    </ButtonBase>
                                </Grid>
                            )
                        })
                    }
                </BottomNavGrid>
                <Divider sx={{position:"relative", width:"80%", margin:"auto"}}></Divider>
                <BottomNavGrid container spacing={2} justifyContent="space-around" sx={{borderRadius:"25px 25px 0 0"}}>
                    {
                        navLinksDown.map((item:{to:string,text:string,icon:React.Node}) => {
                            return (
                                <Grid key={item.to} item xs={4} container justifyContent="center" justifyItems="center">
                                    <ButtonBase disableRipple>
                                        <Link
                                            to={item.to} spy={true} smooth={true} offset={50} 
                                            duration={500} onClick={()=>{props.setTabValue(props.tabValue)}}
                                        >
                                            {item.icon}
                                            <Typography variant='body1'>{item.text}</Typography>
                                        </Link>
                                    </ButtonBase>
                                </Grid>
                            )
                        })
                    }
                </BottomNavGrid>
            </BottomNavPaper>
        </motion.div>
      </BottomNavBox>

    
  )
}

export default BottomNav