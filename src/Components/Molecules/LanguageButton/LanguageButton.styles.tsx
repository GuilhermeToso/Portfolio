import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { IconButton as Button } from "@mui/material";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export const LanguageGrid= styled(Grid,{})({
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:"center",
    justifyItems:"center"
})

export const IconButton = styled(Button,{})({
    '&:active':{
        color: "#1976d2",
        transform: "scale(1.2)"
    }
})

export const LanguageIcon = styled(LanguageRoundedIcon,{})({
    color:'#111',
    opacity:"0.8",
    fontSize:"36px",
    '&:active':{
        color: "#1976d2",
    },
    '@media (max-width:960px)':{
        fontSize:"32px"
    }
})