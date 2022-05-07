import styled from "@emotion/styled";
import { Box } from "@mui/material";
import {theme} from "../../../styles"

const fontSizes = theme.typography.fontSizes

export const SalutionBox = styled(Box,{})({
    position:"relative",
    width:"100%",
})

export const typographyStyles = {
    fontSize:fontSizes.xxs
}