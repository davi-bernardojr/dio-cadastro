import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0 ;
    }

    body {
        background-color: #1e192c ;
        color: #ffffff;

        display: flex ;
        flex-direction: row ;
        align-items: center ;
        justify-content: center ;
    }
`