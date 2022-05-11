import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";
import { MotionStyle } from "framer-motion";
import { theme } from "../../../styles";

export const CTAbuttonsBox = styled(Box,{})({
    position:"relative",
    width:"100%",
})

export const styles: MotionStyle = {
    position:"relative",
    width:"75%", 
    height:"100%", 
    display:"flex", 
    direction:"ltr"
}


export const CTAButton = styled(Button,{})({
    width:"45%", 
    borderRadius:"25px",
    '@media (max-width: 900px)':{
        width:'40%'
    },
    '@media (max-height: 568px) and (min-width:300px)':{
        width:'45%'
    },
})


export const CTAButtonText = styled(Typography,{})({
    position:"relative",
    fontWeight:"100",
    '@media (min-width:300px)':{
        fontSize:"8pt",
    },
    '@media (min-width:600px)':{
        fontSize:"8pt",
    },
    '@media (min-width:960px)':{
        fontSize:"12pt",
    },
    '@media (min-width:1280px)':{
        fontSize:"14pt",
    },
    '@media (min-width:1900px)':{
        fontSize:"16pt",
    }, 
    '@media (max-height: 568px) and (min-width:300px)':{
        fontSize: "12pt"
    },
})

export const buttonStyle = {
    zIndex:"1",
    color: theme.palette.primary.medium
}