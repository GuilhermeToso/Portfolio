import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";


export const PresentationGrid = styled(Grid,{})({
    position:"relative",
    flex: "6",
    width:"50%",
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

export const PresentationBox = styled(Box,{})({
    position:"relative",
    width:"100%",
    height:"70%",
    top:"30%",
    '@media (max-height: 568px) and (min-width:300px)':{
        height:"90%",
        top:"10%"
    },
})
