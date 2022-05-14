import styled from "@emotion/styled"
import { theme } from "../../../styles"

export const avatarStyle = {
    width: "256px",
    height:"256px",
    boxShadow:theme.shadow.s10,
    "@media (max-width:900px)":{
        width:"200px",
        height:"200px"
    }
}

export const FadeDiv = styled('div')({
    margin:"10% 0 0 60%",
    "@media (max-width:1280px)":{
        margin:"10% 0 0 50%"
    },
    "@media (max-width:1000px)":{
        margin:"10% 0 0 40%"
    },
    "@media (max-width:900px)":{
        margin:"10% auto"
    }
})