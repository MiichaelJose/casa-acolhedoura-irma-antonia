import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h2 {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        color: #8B0000;
    }

    p {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 0.9rem;
    }

    button, a {
        font-family: "Montserrat Alternates", sans-serif;
        font-weight: 700;
        border: none;
        text-decoration: none;
        color: black;
        font-size: 0.8rem;
    }

    span {
        font-family: "Montserrat Alternates", sans-serif;
        font-weight: 700;
        font-style: bold;
        font-size: 0.6rem;
    }
`