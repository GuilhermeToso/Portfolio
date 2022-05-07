import React from 'react'
import { LanguageGrid, IconButton, LanguageIcon } from './LanguageButton.styles'
import { LanguagesProps } from '../../Organisms/Header/Header'

interface LanguageButtonProps {
    event: (event: React.MouseEvent<HTMLButtonElement>) => void
    open: boolean
}

const LanguageButton = (props: LanguageButtonProps) => {
  return (
    <LanguageGrid item xs={2}>
        <IconButton 
            disableRipple
            onClick={props.event}
            // aria-controls={props.open ? 'basic-menu' : undefined}
            // aria-haspopup="true"
            // aria-expanded={props.open ? 'true' : undefined}
        >
            <LanguageIcon ></LanguageIcon>
        </IconButton>
    </LanguageGrid>
  )
}

export default LanguageButton