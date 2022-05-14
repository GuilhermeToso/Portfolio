import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const HomePhotoGrid = styled(Grid,{})({
  position:'relative',
  // display:"flex",
  flex:"6",
  width:"100%", 
  height:"100%",
  '@media (max-width:900px)':{
    width:"100%",
    height:"50%",
    flex:"12"
  },
  '@media (max-height: 568px) and (min-width:300px)':{
    width:"50%",
    height:"100%",
    flex:"6"
  },

})

export const HomePhotoDiv = styled('div')({
    position:"relative",
    width:"100%",
    height:"100%",
})