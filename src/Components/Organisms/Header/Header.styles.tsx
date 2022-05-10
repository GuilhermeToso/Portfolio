import styled from "@emotion/styled";
import { Opacity } from "@mui/icons-material";
import { Grid } from "@mui/material";

export const HeaderGrid = styled(Grid, {})({
    position:"fixed",
    width:'100%',
    height:'6vh',
    zIndex:"10",
    backgroundColor:"#000",
    opacity:"0.6"
})