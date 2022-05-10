import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { MotionStyle } from "framer-motion";

export const SocialMediasBox = styled(Box,{})({
    position:"relative",
    width:"100%",
})

export const styles: MotionStyle = {
    position:"relative",
    width:"75%", 
    height:"100%", 
}

export const socialMediaStyles ={
    zIndex:"1"
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