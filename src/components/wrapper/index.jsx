import React from 'react'
import { Button } from "../buton"
import { Input } from "../input"
import { Container, Content } from "./styles"

export const Wraper = ({texto}) => {
     return (
    <>
        <Container>
            <Content>
                {texto}
                <Input placeholder="Nome Completo"/>
                <Input placeholder="Senha"/>
                <Input placeholder="Email"/>
                <Button texto="Cadastrar"/>
            </Content>
        </Container>
    </>
    )
}