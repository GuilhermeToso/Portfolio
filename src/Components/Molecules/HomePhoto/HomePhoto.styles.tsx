import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { MotionStyle } from "framer-motion";



  
export const style: MotionStyle = {
    position:'relative', 
    width:"100%", 
    height:"100%",
  }

export const HomePhotoGrid = styled(Grid,{})({
  position:'relative',
  left:"0vw", 
  width:"50%", 
  height:"100%",
  '@media (max-width:900px)':{
    width:"100%",
    height:"59%",
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