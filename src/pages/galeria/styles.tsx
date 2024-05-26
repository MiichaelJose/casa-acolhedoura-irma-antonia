import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > h2 {
        text-align: center;
        margin-top: 2rem;
    }

    .galeria {
        width: 100%;
        display: grid;
        justify-items: center;
        grid-template-columns: 1fr;
        gap: 5px;
        margin-top: 2rem;

        > img {
            width: 100%;
            max-width: 400px;
            height: 100%;
        }
    }

    .botoes {
        width: fit-content;
        margin-inline: auto;
    }

    @media screen and (min-width: 768px) {
        .galeria {
            grid-template-columns: 1fr 1fr 1fr;
            overflow-y: visible;
        }

        .botoes {
            display: inline-flex;
            > a {
                margin-right: 2rem;
            }
        }
    }
`;
