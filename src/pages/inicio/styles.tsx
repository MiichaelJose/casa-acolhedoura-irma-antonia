import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .introducao-sobre {
        width: 100%;
        max-width: 500px;
        height: 500px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 0.5rem;
        > p {
            margin-top: 2rem;
        }
        
        > div {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        button {
            margin-top: 2rem;
            width: 150px;
            height: 35px;
        }
    } 

    .imagem-valores {
        width: 100%;
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
`