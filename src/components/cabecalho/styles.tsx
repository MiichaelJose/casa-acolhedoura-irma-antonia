import styled from "styled-components";

export const Main = styled.header`
    height: 14vh;
    display: flex;
    align-items: center;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    padding-inline: 0.5rem;
    
    > div {
        width: 100%;
        max-width: 700px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-inline: auto;
    }
    
    .logo {
        height: 72px;
    }
    .barra {
        height: 42px;
    }
    .links-cabecalho {
        display: none;
        visibility: hidden;
    }
    .links-rede-social {
        display: none;
        visibility: hidden;
    }
    
`