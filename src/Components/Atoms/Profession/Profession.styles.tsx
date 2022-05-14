import { theme } from "../../../styles";

const fontSizes = theme.typography.fontSizes

export const typographyStyles = {
    '@media (min-width:300px)':{
        fontSize:fontSizes.xs,
        lineHeight:fontSizes.xs
    },
    '@media (min-width:960px)':{
        fontSize:fontSizes.md,
        lineHeight:fontSizes.md
    },
    '@media (min-width:1280px)':{
        fontSize:fontSizes.lg,
        lineHeight:fontSizes.lg
    },
    '@media (min-width:1900px)':{
        fontSize:fontSizes.xlg,
        lineHeight:fontSizes.xlg
    },
    '@media (max-height: 568px) and (min-width:300px)':{
        fontSize:fontSizes.xs,
        lineHeight:fontSizes.xs
    },
}