import styled from "@emotion/styled";
import { Grid } from "@mui/material";

interface PageGridProps {
    height:string;
}

export const PageGrid = styled(Grid,{})((props:PageGridProps) => ({
    position:"relative",
    width:'100vw',
    height:props.height,
    overflowX:'hidden',
    border:"1px solid red"
}))