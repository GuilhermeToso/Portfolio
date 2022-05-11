import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { IconButton as Button } from "@mui/material";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { theme } from "../../../styles";

export const LanguageGrid= styled(Grid,{})({
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:"center",
    justifyItems:"center"
})

export const IconButton = styled(Button,{})({
    '&:active':{
        color: theme.palette.primary.medium,
        transform: "scale(1.2)"
    }
})

export const LanguageIcon = styled(LanguageRoundedIcon,{})({
    color:'#fff',
    opacity:"0.8",
    fontSize:"36px",
    '&:active':{
        color: theme.palette.primary.medium,
    },
    '@media (max-width:960px)':{
        fontSize:"32px"
    }
})