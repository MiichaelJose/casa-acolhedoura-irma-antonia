import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    max-width: 1000px;
    padding: 0.5rem;
    margin-inline: auto;
    text-align: center;

    h2 {
        margin-top: 2rem;
    }

    .filtro {
        width: 100%;
        display: flex;
        align-items: center;
        margin-top:5px;
        button {
            display: flex;
            align-items: center;
            background-color: white;
            margin-left:auto;
        }
    }

    section {
        display: grid;
        place-items: center;
        margin-top: 2rem;
    }

    .card {
        width: 100px;
        height: 150px;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        div {
            width: 100%;
            border-bottom: 2px solid lightgray;

            > p {
                margin:5px 0;
            }
        }
        > button {
            height: 30px;
            width: 100%;
            background-color: #ADD8E6;
        }
    }

    @media screen and (min-width: 768px) {
        section {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
`