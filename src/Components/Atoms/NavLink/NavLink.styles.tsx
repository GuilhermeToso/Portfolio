import { styled } from "@mui/system";
import { Tab } from "@mui/material";
import {theme} from "../../../styles"

export const NavTab = styled(Tab,{})({
    fontFamily:theme.typography.fontFamily.text,
    fontWeight:"600",
    fontSize:"10pt",
    color:"#fff",
    opacity:"0.8"
})