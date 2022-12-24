import React from 'react'
import { IconContainer, InputContainer, InputText } from './styles'

export const Input = ({lefticon, placeholder}) => {
     return (
        <InputContainer>
            {lefticon ? <IconContainer>{lefticon}</IconContainer> : null}
            <InputText placeholder={placeholder}/>
        </InputContainer>
    )
}