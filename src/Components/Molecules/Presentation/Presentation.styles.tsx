import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

export const PresentationBox = styled(Box,{})({
    position:"relative",
    width:"50%",
    height:"50%",
    top:"35%",
    '@media (max-width:900px)':{
        top:"15%",
        width:"100%"
    }
})

export const PresentationGrid = styled(Grid,{})({
    position:"relative",
    width:"50%",
    height:"50%",
    top:"25%",
    left:"10%",
    '@media (max-width:900px)':{
        top:"12%",
        left:"0%",
        width:"100%",
        height:"41%"
    },
    '@media (max-height: 568px) and (min-width:300px)':{
        top:"15%",
        left:"0%",
        width:"100%",
        height:"41%"
    },
})
