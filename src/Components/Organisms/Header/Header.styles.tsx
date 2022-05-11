import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { theme } from "../../../styles";

export const HeaderGrid = styled(Grid, {})({
    position:"fixed",
    width:'100%',
    height:'6vh',
    zIndex:"10",
    backgroundColor:theme.palette.grey.A900,
    opacity:"0.9"
})