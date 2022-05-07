import React from 'react'
import { typographyStyles, IntroductionBox} from './Introduction.styles'
import { motion, MotionStyle } from 'framer-motion'
import { Typography } from '@mui/material'
import { theme } from '../../../styles'

const Introduction = () => {

  const variations = {
      hidden:{
          opacity: 0,
          left:"0%"
      },
      visible:{
        opacity: 1,
        left:"15%",
        transition:{
            delay:0.4,
            duration:1
        }
    }
  }

  const styles: MotionStyle = {
    position:"relative",
    width: "85%", 
    height:"100%", 
}
  
  return (
    <IntroductionBox>
      <motion.div
          variants={variations}
          initial="hidden"
          animate="visible"
          style={styles}
      >
        <Typography
          fontFamily={theme.typography.fontFamily.title}
          fontWeight="600"
          color="#2f2f2f"
          sx={typographyStyles}
          align="left"
        >
          GUILHERME M. TOSO
        </Typography>
      </motion.div>
    </IntroductionBox>
  )
}

export default Introduction