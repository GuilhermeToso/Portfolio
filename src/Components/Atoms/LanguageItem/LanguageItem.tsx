import React from 'react'
import Link from 'next/link'
import {MenuItem, Typography} from "@mui/material"
import {NextRouter} from "next/router"
import {theme} from "../../../styles"

interface LanguageItemProps {
    onClick: () => void,
    language: string,
    router: NextRouter;
    locale: string,
}

const LanguageItem = (props: LanguageItemProps) => {

  const router = props.router

  return (
    <MenuItem
    >
        <Link
            href={router.pathname}
            locale={props.locale}
            passHref
        >
            <Typography
                variant='h6'
                fontFamily={theme.typography.fontFamily.title}
                fontWeight='500'
                color="#111"
            >
                {props.language}
            </Typography>
        </Link>
    </MenuItem>
    )
}

export default LanguageItem