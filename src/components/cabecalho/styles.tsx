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
    .links-cabecalho, .links-rede-social {
        display: none;
        visibility: hidden;
    }
    
    @media screen and (min-width: 768px) {
        .barra {
            display: none;
            visibility: hidden;
        }

        .links-cabecalho, .links-rede-social {
            display: flex;
            visibility: visible;
        }

        .links-cabecalho {
            display: flex;
            justify-content: space-evenly;
            width: 400px;
        }

        .links-rede-social {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 120px;

            > img {
                width: 26px;
                height: 26px;
            }
        }
    }
`