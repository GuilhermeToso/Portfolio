import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { theme } from "../../../styles";

const fontSizes = theme.typography.fontSizes

export const AboutTitleGrid = styled(Grid,{})({
    position:"relative",
    
})

export const typographyStyle = {
    margin: "25% 0 0 0",
    '@media (min-width:300px)':{
        fontSize:fontSizes.md
    },
    '@media (min-width:900px)':{
        fontSize:fontSizes.md
    },
    '@media (min-width:1536px)':{
        fontSize:fontSizes.lg
    },
    '@media (min-width:1900px)':{
        fontSize:fontSizes.xlg
    }
}