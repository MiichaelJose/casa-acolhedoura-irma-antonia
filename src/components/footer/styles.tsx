import styled from "styled-components";

import { Link as link } from "react-router-dom";

export const Main = styled.footer`
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.2);
    padding-inline: 0.5rem;

    > div {
        width: 100%;
        max-width: 700px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-inline: auto;

        > p {
            visibility: hidden;
            display: none;
        }

        > a {
            visibility: hidden;
            display: none;
        }
    }

    .links-rede-social {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > div {
            margin-top: 0.5rem;
            width: 100px;
            display: flex;
            justify-content: space-between;
        }
    }

    @media screen and (min-width: 768px) {
        > div {
            justify-content: space-between;

            > a {
                visibility: visible;
                display: initial;
            }
        }
    }
`;

export const Link = styled(link)`
    font-weight: 400;
`;
