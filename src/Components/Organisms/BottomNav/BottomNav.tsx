import React, {useContext} from 'react'
import { BottomNavBox, BottomNavPaper, styles, BottomNavGrid } from './BottomNav.styles'
import {motion} from "framer-motion"
import { Grid, Typography, ButtonBase, Divider } from '@mui/material';
import { Link } from "react-scroll";
import { UilEstate, UilUser, UilBagAlt, UilWrench, UilFileAlt, UilMessage } from '@iconscout/react-unicons'
import { NavigationContext } from '../../../Contexts';


const BottomNav = () => {

  const {openBottomNav, tabValue, handleTabValue} = useContext(NavigationContext)
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
            to:"portfolio",
            text:"Portfolio",
            icon:<UilFileAlt/>
        },
    ]
    const navLinksDown = [
        {
            to:"skills",
            text:"Skills",
            icon:<UilWrench/>
            },
        {
            to:"services",
            text:"Services",
            icon:<UilBagAlt/>
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
            initial={false}
            animate={openBottomNav ? 'show' : 'notShow'}
            style={styles}
        >
            <BottomNavPaper elevation={16}>

                <BottomNavGrid container spacing={2} justifyContent="space-around" sx={{borderRadius:"25px 25px 0 0"}}>
                    {
                        navLinksUp.map((item:{to:string,text:string,icon:JSX.Element}) => {
                            return (
                                <Grid key={item.to} item xs={4} container justifyContent="center" justifyItems="center">
                                    <ButtonBase disableRipple>
                                        <Link
                                            to={item.to} spy={true} smooth={true} offset={50} 
                                            duration={500} onClick={()=>{handleTabValue(tabValue)}}
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
                        navLinksDown.map((item:{to:string,text:string,icon:JSX.Element}) => {
                            return (
                                <Grid key={item.to} item xs={4} container justifyContent="center" justifyItems="center">
                                    <ButtonBase disableRipple>
                                        <Link
                                            to={item.to} spy={true} smooth={true} offset={50} 
                                            duration={500} onClick={()=>{handleTabValue(tabValue)}}
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