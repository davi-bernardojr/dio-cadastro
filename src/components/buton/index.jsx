import React from 'react'
import { ButtonContainer } from './styles'

export const Button = ({texto}) => {
     return (
        <ButtonContainer>
            {texto}            
        </ButtonContainer>
    )
}