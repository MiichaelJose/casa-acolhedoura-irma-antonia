import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .filtro {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: auto;
        button {
            display: flex;
            align-items: center;
            background-color: white;
        }
    }

    .filter-modal {
        height: 200px;
        width: 170px;
        right: 25px;
        border-radius: 5px 0px 5px 5px;
        position: absolute;
        background-color: white;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        display: none;
    }

    section {
        position: relative;
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

        > h3 {
            padding-top: 1rem;
            border-top: 0.1rem solid black;
            text-align: center;
        }
    }

    .grid-card {
        display: grid;
        place-items: center;
        margin-top: 1.4rem;
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
        justify-self: center;

        div {
            width: 100%;
            height: 30%;
            border-bottom: 2px solid lightgray;
            > p {
                text-align: center;
                font-size: 0.78rem;
                padding: 0.39rem;
                font-weight: bold;
                line-height: 1rem;
            }
        }
        a {
            width: 100%;
        }
        button {
            height: 30px;
            width: 100%;
            background-color: #8b0000;
            color: white;
        }
    }

    .main-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: #f9f9f9;
        border-radius: #f9f9f9;
        padding: 1rem;
        margin-top: 2rem;

        > .principal-content {
            width: 100%;
            display: grid;
            justify-items: center;
            align-items: center;
        }
    }

    @media screen and (min-width: 768px) {
        .grid-card {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        .main-content > .principal-content {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;
