import styled from "styled-components";

export const Main = styled.main`
    h2 {
        text-align: center;
    }

    > p {
        margin-top: 2rem;
    }

    > div {
        background-image: url("/y-so-serious-white.png");
        padding: 1rem;
        margin-top: 1rem;
    }

    .secao-valores-acoes {
        display: flex;
        flex-direction: column;

        div {
            width: 100%;
            margin: 1rem auto;

            > div {
                display: flex;
                align-items: center;
            }

            img {
                margin-right: 1rem;
            }
        }
    }

    .localização {
        width: 100%;
        max-width: 550px;

        p {
            margin-top: 2rem;
        }

        > img {
            width: 100%;
            margin-top: 2rem;
        }
    }

    .botoes {
        width: fit-content;
        margin-inline: auto;
    }

    @media screen and (min-width: 768px) {
        .secao-valores-acoes > div {
            max-width: 80%;
            margin-inline: auto;
        }

        .botoes {
            display: inline-flex;
            > a {
                margin-right: 2rem;
            }
        }
    }
`;
