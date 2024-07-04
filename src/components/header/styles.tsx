import styled from "styled-components";

import { Link as link } from "react-router-dom";

type HeaderType = {
    width: string;
};

export const Main = styled.header<HeaderType>`
    width: 100%;
    max-width: ${(props) => props.width};
    height: 14vh;
    display: flex;
    margin-inline: auto;
    align-items: center;
    padding-inline: 0.5rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    > nav {
        width: 100%;
        max-width: 700px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-inline: auto;
    }
    .barra {
        height: 42px;
    }
    .links-cabecalho,
    .links-rede-social {
        display: none;
        visibility: hidden;
    }

    @media screen and (min-width: 768px) {
        .barra {
            display: none;
            visibility: hidden;
        }

        .links-cabecalho,
        .links-rede-social {
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
        }
    }
`;

export const Modal = styled.div`
    width: 320px;
    height: 300px;
    z-index: 1;
    right: 0;
    border-bottom: 3px solid lightgray;
    position: absolute;
    background-color: white;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    a {
        font-weight: bold;
    }

    @media screen and (min-width: 768px) {
        display: none;
        visibility: hidden;
    }
`;

export const Link = styled(link)`
    font-weight: 400;
`;
