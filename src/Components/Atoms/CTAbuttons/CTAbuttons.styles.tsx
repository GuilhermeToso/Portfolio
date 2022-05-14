import styled from "@emotion/styled";
import { Typography, Button, keyframes } from "@mui/material";
import { theme } from "../../../styles";

const slideIn = keyframes`
    0% {
        transform: translateX(0%);
        opacity:0
    }
    50% {
        transform: translateX(-15%);
        opacity:0
    }
    100% {
        transform: translateX(0%);
        opacity:1
    }
`

export const presentationStyle = {
    display:"flex",
    direction:"ltr",
    animation: `${slideIn} 2s ease-in`    
}

export const CTAButton = styled(Button,{})({
    position:"relative",
    width:"45%", 
    borderRadius:"25px",
    cursor:"pointer",
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
    zIndex:"2",
    color: theme.palette.primary.medium
}