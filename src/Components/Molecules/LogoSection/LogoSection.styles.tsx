import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import {Link as Scroll} from "react-scroll"

export const LogoGrid = styled(Grid,{})({
    width:'100%', 
    height:'100%'
})

export const LogoContainer = styled(Container,{})({
    marginTop: '8px', 
    padding:"0 25%"
})

export const Link = styled(Scroll,{})({
    cursor:"pointer"
})

export const LogoBox = styled(Box, {})({
    position:"relative", 
    width:"100%",
    height:"100%",
    minHeight:"72px",
    minWidth:"120px"
})