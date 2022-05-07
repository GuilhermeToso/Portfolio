import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const EmptyGrid = styled(Grid,{})({
    display:"none",
    width:'100%',
    height:"100%",
    '@media (max-width:960px)':{
        display:"flex"
    }
})