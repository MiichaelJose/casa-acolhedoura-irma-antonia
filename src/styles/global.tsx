import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, p, a {
        font-style: normal;
    }

    p, a {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }

    p {
        font-size: 0.9rem;
        line-height: 1.5rem;
    }

    a {
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

    .h1_super {
        font-size: 2.67rem;
    }

    .h1_title,
    .h4_subtitle {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #ffffcc;
        text-align: center;
    }

    .h2_bebasneue, .h3_bebasneue  {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
    }

    .h2_montserrat, .h3_montserrat,  .h4_montserrat {
        font-family: "Montserrat", sans-serif;
    }

    .h2_montserrat {
        margin-top: 2rem;
    }

    .h2_bebasneue {
        text-align: center;
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
        max-width: 800px;
        padding: 0.5rem;
        margin-inline: auto;
    }
`;
