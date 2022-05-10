import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { IconButton as Button } from "@mui/material";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

export const MenuBarGrid= styled(Grid,{})({
    display:"none",
    '@media (max-width:960px)':{
        display:"flex",
        justifyContent:"center",
        justifyItems:"center",
        width:"100%",
        height:"100%"
    }
})

export const IconButton = styled(Button,{})({
    '&:active':{
        color: "#1976d2",
        transform: "scale(1.2)"
    }
})

export const WidgetIcon = styled(WidgetsOutlinedIcon,{})({
    color:"#fff",
    fontSize:"32px"
})