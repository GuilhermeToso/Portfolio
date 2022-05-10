import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { theme } from "../../../styles";

const fontSizes = theme.typography.fontSizes

export const AboutTitleGrid = styled(Grid,{})({
    position:"relative",
    height:"20%",
    border:"1px solid red"
})

export const typographyStyle = {
    '@media (min-width:900px)':{
        fontSize:fontSizes.xlg
    }
}