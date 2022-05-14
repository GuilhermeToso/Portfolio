import { theme } from "../../../styles";
import { keyframes } from "@mui/material";


const slideIn = keyframes`
    0% {
        transform: translateX(0%);
        opacity:0
    }
    44.44% {
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
    animation: `${slideIn} 1.8s ease-in`    
}

export const socialMediaStyles ={
    zIndex:"1",
    color: theme.palette.primary.medium
}

export const iconsStyle = {
    fontSize:"36px",
    '@media (max-width:900px)':{
        fontSize:"27px"
    },
    '@media (max-width:400px)':{
        fontSize:"21px"
    },
    '@media (max-height: 568px) and (min-width:300px)':{
        fontSize:"24px"
    }
}