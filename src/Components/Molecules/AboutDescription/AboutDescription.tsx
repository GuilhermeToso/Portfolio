import React from 'react'
import {Grid, Stack, Typography, Paper} from "@mui/material"
import { TextDiv, ExperienceDiv } from './AboutDescription.styles'
import { useTranslation } from "next-i18next"
import { theme } from '../../../styles'

const AboutDescription = () => {

  const {t} = useTranslation("about")

  return (
    <Grid item container xs={12} md={5.75}>
      <TextDiv data-aos="fade-up" data-aos-duration="1000">
        <Typography
          fontFamily={theme.typography.fontFamily.text}
          fontWeight="400"
          color={theme.palette.grey.A800}
          align="left"
        >

          {t("about_me")}
        </Typography>
      </TextDiv>
      <ExperienceDiv data-aos="fade-up" data-aos-duration="1000">
        <Stack direction="row" spacing={3}>
            <Paper elevation={14}>
              Hi
            </Paper>
            <Paper elevation={14}>
              Hi
            </Paper>
        </Stack>
      </ExperienceDiv>
    </Grid>
  )
}

export default AboutDescription