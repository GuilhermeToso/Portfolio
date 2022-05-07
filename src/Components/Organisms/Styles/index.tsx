import styled from "@emotion/styled";
import { Grid } from "@mui/material";

interface PageGridProps {
    top:string;
}

export const PageGrid = styled(Grid,{})((props:PageGridProps) => ({
    width:'100vw',
    height:'100vh',
    top:props.top,
    overflowX:'hidden'
}))