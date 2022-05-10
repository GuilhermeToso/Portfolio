import { Container } from '@mui/material'
import React, {useContext} from 'react'
import NavLink from '../../Atoms/NavLink/NavLink'
import { NavGrid, NavTabs } from './Nav.styles'
import {useTranslation} from "next-i18next"
import { NextRouter} from "next/router"
import { NavigationContext } from '../../../Contexts'

interface NavProps {
    router: NextRouter;
}

const Nav = (props: NavProps) => {

    const {t} = useTranslation('common')
    const router = props.router

    const {tabValue, handleTabValue} = useContext(NavigationContext)
    
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        handleTabValue(newValue);
    };

    return (
        <NavGrid item container justifyContent="center" justifyItems="center" md={8} xs={0}>
            <Container sx={{height:"100%"}}>
                <NavTabs
                 value={tabValue}
                 onChange={handleChange}
                 aria-label="scrollable prevent tabs example"
                >
                    <NavLink to="home" label={router.locale == "en-US" ? t("home") : t("begin")} state={0}></NavLink>
                    <NavLink to="about" label={t("about")} state={1}></NavLink>
                    <NavLink to="portfolio" label={t("portfolio")} state={2}></NavLink>
                    <NavLink to="skills" label={t("skills")} state={3}></NavLink>
                    <NavLink to="services" label={t("services")} state={4}></NavLink>
                    <NavLink to="contact" label={t("contact")} state={5}></NavLink>
                </NavTabs>
            </Container>
        </NavGrid>
    )
}

export default Nav