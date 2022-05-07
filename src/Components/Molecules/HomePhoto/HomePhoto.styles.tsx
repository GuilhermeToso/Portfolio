import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { MotionStyle } from "framer-motion";



  
export const style: MotionStyle = {
    position:'relative', 
    width:"100%", 
    height:"100%",
  }

export const HomePhotoBox = styled(Box,{})({
    position:'relative',
    left:"0vw", 
    width:"50%", 
    height:"100%",
    '@media (max-width:900px)':{
      width:"100%",
      top:"-10%",
      left:"0%",
      height:"65%",
    },
    '@media (max-height: 568px) and (min-width:300px)':{
      width:"100%",
      top:"15%",
      left:"-25%",
      height:"85%",
    },

})

export const HomePhotoGrid = styled(Grid,{})({
  position:'relative',
  left:"0vw", 
  width:"50%", 
  height:"100%",
  '@media (max-width:900px)':{
    width:"100%",
    height:"70%",
  },
  '@media (max-height: 568px) and (min-width:300px)':{
    width:"50%",
    top:"0%",
    left:"10%",
    height:"100%",
  },

})

export const HomePhotoContainer = styled(Box,{})({
    position:"relative",
    width:"100%",
    height:"100%",
})