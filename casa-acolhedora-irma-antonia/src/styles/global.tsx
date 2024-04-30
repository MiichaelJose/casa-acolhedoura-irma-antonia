import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    
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
    }

    button {
        font-family: "Montserrat Alternates", sans-serif;
        font-weight: 700;
        font-style: bold;
        border: none;
    }

    span {
        font-family: "Montserrat Alternates", sans-serif;
        font-weight: 700;
        font-style: bold;
        font-size: 0.6rem;
    }
`