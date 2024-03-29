import { theme } from "../../../styles";

const fontSizes = theme.typography.fontSizes


export const typographyStyles = {
    '@media (min-width:200px)':{
        fontSize:'12pt',
        lineHeight:'12pt',
        padding:"2.5% 0 2.5% 0"
    },
    '@media (min-width:400px)':{
        fontSize:fontSizes.xxs,
        lineHeight:fontSizes.xxs,
        padding:"2.5% 0 2.5% 0"
    },
    '@media (min-width:960px)':{
        fontSize:fontSizes.xs,
        lineHeight:fontSizes.xs
    },
    '@media (min-width:1280px)':{
        fontSize:fontSizes.sm,
        lineHeight:fontSizes.sm
    },
    '@media (min-width:1900px)':{
        fontSize:fontSizes.sm,
        lineHeight:fontSizes.sm
    },
    '@media (max-height: 568px) and (min-width:300px)':{
        fontSize:fontSizes.xxs,
        lineHeight:fontSizes.xs,
        padding:"0%"
    },
}