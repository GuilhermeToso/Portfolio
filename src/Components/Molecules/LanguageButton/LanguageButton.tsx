import React from 'react'
import { LanguageGrid, IconButton, LanguageIcon } from './LanguageButton.styles'
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
        >
            <LanguageIcon ></LanguageIcon>
        </IconButton>
    </LanguageGrid>
  )
}

export default LanguageButton