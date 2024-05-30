import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2 {
        margin-top: 2rem;
    }

    .filtro {
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 5px;
        button {
            display: flex;
            align-items: center;
            background-color: white;
            margin-left: auto;
        }
    }

    section {
        width: 100%;
        margin-top: 1rem;
        > h3 {
            text-align: center;
            padding-bottom: 1rem;
            border-bottom: 1px solid lightslategray;
        }
    }

    .area-cards {
        margin-top: 1rem;

        > h4 {
            text-align: center;
            color: lightslategray;
        }
    }

    .grid-card {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .card {
        width: 200px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        background-color: white;
        border: 2px solid lightgrey;
        text-align: center;
        border-radius: 0.5rem;

        div {
            width: 100%;
            border-bottom: 2px solid lightgray;
            > p {
                margin: 5px 0;
            }
        }
        > button {
            height: 30px;
            width: 100%;
            background-color: #8b0000;
            color: white;
        }
    }

    .main-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        background-color: #f9f9f9;
        border-radius: #f9f9f9;
        padding: 1rem;
        margin-top: 1rem;
    }

    @media screen and (min-width: 768px) {
        .grid-card {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        .main-content {
            flex-direction: row;
        }
    }
`;
