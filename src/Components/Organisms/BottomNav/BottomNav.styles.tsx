import styled from "@emotion/styled";
import { Paper,Box, Grid } from "@mui/material";
import { MotionStyle } from "framer-motion";

export const BottomNavBox = styled(Box,{})({
    position:"fixed",
    width:"100%",
    height:"20vh",
    top:"80%",
    borderRadius:"25px 25px 0 0",
    '@media (max-height: 568px) and (min-width:300px)':{
        width:"50%",
        height:"35vh",
        top:"65%",
        left:"25%",
    },
})

export const styles: MotionStyle = {
    position: "relative",
    width:"100%",
}

export const BottomNavPaper = styled(Paper,{})({
    position:"relative",
    width:"100%",
    height:"100%",
    borderRadius:"25px 25px 0 0",
    backgroundColor:"#f5f5f5",
})

export const BottomNavGrid = styled(Grid,{})({
    position:"relative",
    width:"100%",
    height:"49%",
    margin:"0"
})