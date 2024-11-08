import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'poppins', sans-serif;
    }

    body{
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background-color: #d1d5c3;
    }

`;

export default GlobalStyle;
