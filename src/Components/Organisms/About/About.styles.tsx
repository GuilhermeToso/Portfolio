import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import {theme} from "../../../styles"

export const AboutContentGrid = styled(Grid,{})({
    position:"relative",
    paddingTop:"1%",
    "@media (max-width:900px)":{
        paddingTop:"0"
    }
})

export const Divide = styled('hr')({
    position:"relative",
    width:"1%",
    borderWidth:'0.5',
    color:theme.palette.grey.A50,
    opacity:"0.5",
    "@media (max-width:900px)":{
        width:"80%",
        margin:"auto"
    }
})

export const pageGridStyles ={
    overflow:"hidden"
}