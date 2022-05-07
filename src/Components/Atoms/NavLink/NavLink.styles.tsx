import { styled } from "@mui/system";
import { Tab } from "@mui/material";
import {theme} from "../../../styles"

export const NavTab = styled(Tab,{})({
    fontFamily:theme.typography.fontFamily.text,
    fontWeight:"600",
    fontSize:"12pt",
    color:"#111",
    opacity:"0.8"
})