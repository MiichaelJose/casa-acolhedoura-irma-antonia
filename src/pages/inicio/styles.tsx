import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    .introducao-sobre {
        width: 100%;
        max-width: 500px;
        height: 500px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;

        > p {
            margin-top: 2rem;
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
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > img {
            width: 90%;
            max-width: 500px;
        }

        > section {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 90%;
            max-width: 500px;
            height: 75px;
            margin-top: 5px;
            border-radius: 5px;
            background-image: url('/y-so-serious-white.png');
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
        flex-direction: unset;
    }
`

export const Section = styled.section`
    background-image: url('/y-so-serious-white.png');
    padding: 0.5rem;

    .conteudo {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 1000px;
        margin-inline: auto;
    }

    .compromissos {
        width: 100%;
        max-width: 500px;
        
        h2 {
            text-align: center;
        }

        > p {
            margin-top: 2rem;
        }

        > div {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .caixas {
            height: 300px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-around;
            
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
        max-width: 500px;
        height: 500px;
        margin-top: 2rem;
        
        h2 {
            text-align: center;
        }

        > p {
            margin-top: 2rem;
        }

        > div {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        > img {
            width: 100%;
            margin-top: 2rem;
        }
    }

    @media screen and (min-width: 768px) {
        
    }
`

