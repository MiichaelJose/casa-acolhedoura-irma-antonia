import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .introducao-sobre {
        width: 100%;
        max-width: 500px;
        height: 400px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;

        > p {
            margin-top: 2rem;
            line-height: 1.5rem;
        }

        > div {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    }

    .imagem-valores {
        width: 100%;
        max-width: 500px;
        height: 100%;
        max-height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > img {
            width: 100%;
            max-width: 400px;
        }

        > section {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            max-width: 400px;
            height: 75px;
            margin-top: 5px;
            border-radius: 5px;
            background-image: url("/y-so-serious-white.png");
            box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

            > div {
                text-align: center;
            }

            img {
                height: 30px;
                display: block;
                margin-inline: auto;
            }
        }
    }

    @media screen and (min-width: 768px) {
        height: 86vh;
        flex-direction: row;

        .imagem-valores > img {
            width: 100%;
            max-width: 500px;
        }

        .imagem-valores > section {
            max-width: 500px;
        }
    }
`;

export const Section = styled.section`
    width: 100%;
    background-image: url("/y-so-serious-white.png");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin: 2rem auto 0;

    .conteudo {
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .compromissos {
        width: 100%;
        max-width: 550px;

        h2 {
            text-align: left;
        }

        > p {
            margin-top: 2rem;
        }

        .botoes {
            width: fit-content;
            margin-inline: auto;
        }

        .caixas {
            height: 300px;
            width: 100%;
            display: grid;
            place-items: center;

            > div {
                width: 100%;
                max-width: 250px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: white;
                border-radius: 0.5rem;
                padding: 0.5rem;
                box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
            }

            img {
                width: 22px;
                height: 22px;
                margin-right: 0.3rem;
            }
        }
    }

    .localizaçao {
        width: 100%;
        max-width: 550px;
        margin-top: 2rem;

        h2 {
            text-align: right;
        }

        > p {
            margin-top: 2rem;
        }

        > img {
            width: 100%;
            margin-top: 2rem;
        }
    }

    @media screen and (min-width: 768px) {
        .caixas {
            grid-template-columns: 1fr 1fr;
        }

        .botoes {
            display: inline-flex;
            > a {
                margin-right: 2rem;
            }
        }

        .compromissos {
            margin-right: auto;
        }

        .localizaçao {
            margin-left: auto;
        }
    }
`;

export const Article = styled.article`
    margin: 2rem auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

    @media screen and (min-width: 768px) {
        .galeria {
            grid-template-columns: 1fr 1fr 1fr;
            overflow-y: visible;
        }
    }
`;
