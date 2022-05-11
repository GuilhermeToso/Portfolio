import styled from "@emotion/styled"
import { Menu as LanguageMenu } from "@mui/material"
import { theme } from "../../../styles"

export const Menu = styled(LanguageMenu,{})({
    
    '& .MuiPaper-root':{
        backgroundColor:theme.palette.grey.A100,
        width:"200px",
        top:"-30%"
    },
})