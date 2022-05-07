import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme } from "../../../styles";

const fontSizes = theme.typography.fontSizes

export const IntroductionBox = styled(Box,{})({
    position:"relative",
    width:"100%",
})

export const typographyStyles = {
    '@media (min-width:300px)':{
        fontSize:fontSizes.xs,
    },
    '@media (min-width:600px)':{
        fontSize:fontSizes.xs,
    },
    '@media (min-width:960px)':{
        fontSize:fontSizes.lg,
        lineHeight:fontSizes.lg
    },
    '@media (min-width:1280px)':{
        fontSize:fontSizes.xlg,
        lineHeight:fontSizes.xlg
    },
    '@media (min-width:1900px)':{
        fontSize:fontSizes.xxlg,
        lineHeight:fontSizes.xxlg
    },
    '@media (max-height: 568px) and (min-width:300px)':{
        fontSize:fontSizes.sm,
        lineHeight:fontSizes.sm
    },
}