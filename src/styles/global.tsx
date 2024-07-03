import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    h1 {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-size: 2.67rem;
    }

    h2 {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        color: #8B0000;
        font-size: 1.5rem;
        margin-top: 2rem;
    }

    h3, h4 {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        margin-top: 1rem;
    }

    p {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 0.9rem;
        line-height: 1.5rem;
    }

    a {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 0.9rem;
        text-decoration: none;
        color: black;
        cursor: pointer;
    }

    button, .btn {
        font-family: "Montserrat Alternates", sans-serif;
        font-weight: 700;
        border: none;
        text-decoration: none;
        color: black;
        font-size: 0.8rem;
        cursor: pointer;
    }

    span {
        font-family: "Montserrat Alternates", sans-serif;
        font-weight: 700;
        font-style: bold;
        font-size: 0.6rem;
    }

    .icon {
        width: 25px;
        height: 25px;
    }

    .logo {
        height: 72px;
    }

    .secao-padrao {
        width: 100%;
        max-width: 1000px;
        padding: 0.5rem;
        margin-inline: auto;
    }
`;
