import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        min-height: 100vh;
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    body {
        overflow-x: hidden;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        background-color: #FAFAFB;
    }
    
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        max-width: 100%;
    }
`
