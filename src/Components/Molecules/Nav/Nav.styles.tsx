import styled from "@emotion/styled";
import { Grid, Tabs } from "@mui/material";

export const NavGrid = styled(Grid,{})({
    width: '100%',
    height: '100%',
    display:"flex",
    justifyContent:"center",
    justifyItems:"center",
    '@media (max-width:960px)':{
        display:'none'
    }
})

export const NavTabs = styled(Tabs,{})({
    width:"100%",
    height:"50%",
    margin: "2.5% 0",
    '& .MuiTabs-flexContainer':{
        justifyContent:"center",
        justifyItems:"center"
    }
    
})