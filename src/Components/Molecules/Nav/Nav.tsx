import { Container, Tabs} from '@mui/material'
import React from 'react'
import NavLink from '../../Atoms/NavLink/NavLink'
import { NavGrid, NavTabs } from './Nav.styles'
import {useTranslation} from "next-i18next"
import {useRouter, NextRouter} from "next/router"

interface NavProps {
    tabValue: number;
    setTabValue: React.Dispatch<React.SetStateAction<number>>;
    router: NextRouter;
}

const Nav = (props: NavProps) => {

    const {t} = useTranslation('common')
    const router = props.router

    const {tabValue, setTabValue} = props
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };


    return (
        <NavGrid item container justifyContent="center" justifyItems="center" md={8} xs={0}>
            <Container>
                <NavTabs
                 value={tabValue}
                 onChange={handleChange}
                 aria-label="scrollable prevent tabs example"
                >
                    <NavLink to="home" label={router.locale == "en-US" ? t("home") : t("begin")} state={0} setTabValue={setTabValue}></NavLink>
                    <NavLink to="about" label={t("about")} state={1} setTabValue={setTabValue}></NavLink>
                    <NavLink to="skills" label={t("skills")} state={2} setTabValue={setTabValue}></NavLink>
                    <NavLink to="services" label={t("services")} state={3} setTabValue={setTabValue}></NavLink>
                    <NavLink to="portfolio" label={t("portfolio")} state={4} setTabValue={setTabValue}></NavLink>
                    <NavLink to="contact" label={t("contact")} state={5} setTabValue={setTabValue}></NavLink>
                </NavTabs>
            </Container>
        </NavGrid>
    )
}

export default Nav