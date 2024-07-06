import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    width: 100%;
    height: 100vh;

    flex-direction: column;
    align-items: center;
    background-image: url("/galery/equipe.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .h1_title {
        text-align: center;
        letter-spacing: 0.2rem;
    }

    .h4_subtitle {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    > .filter {
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > p {
            text-align: center;
            width: 300px;
            color: white;
            margin-inline: auto;
        }
    }

    @media screen and (min-width: 768px) {
        height: 100vh;
        flex-direction: row;
    }
`;

export const Section = styled.section`
    box-sizing: border-box;
    h2 {
        margin-top: 3rem;
        font-size: 2rem;
        border-bottom: 4px solid #dcdcdc;
    }

    h3 {
        font-size: 1.5rem;
    }

    .article-pilar {
        > div {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        > div p {
            margin-top: 1rem;
            padding-bottom: 1rem;
        }

        > div span {
            font-size: 0.8rem;
            cursor: pointer;
        }

        > div span:hover {
            font-weight: bold;
            color: #dcdcdc;
        }

        .section-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            background-repeat: no-repeat;
            border-radius: 30px;
            margin-top: 1rem;
        }

        .section-img:hover {
            filter: blur(2px);
            cursor: pointer;
        }
    }

    .slide-in {
        transform: translateX(-5%);
        animation: slide-in-animation 1s forwards;
    }

    @keyframes slide-in-animation {
        to {
            transform: translateX(0);
        }
    }

    .pulse {
        animation: pulse-animation 3s;
    }

    @keyframes pulse-animation {
        0% {
            transform: scale(1);
            opacity: 0;
        }
        50% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @media screen and (min-width: 768px) {
        .article-pilar:nth-child(3) {
            flex-direction: row-reverse;
        }
        .article-pilar {
            margin-top: 2rem;
            justify-content: space-between;
            display: flex;

            > div {
                width: 50%;
            }

            .section-img {
                max-width: 350px;
                margin-top: 0;
            }
        }
    }
`;

export const Divisor = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 3rem;
    padding: 3rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #000000b6;

    h3 {
        font-size: 1.5rem;
        color: #ffffcc;
    }
`;

export const SectionMissaoValores = styled.section`
    h2 {
        margin-top: 3rem;
        font-size: 2rem;
        border-bottom: 4px solid #dcdcdc;
    }

    h3 {
        font-size: 1.5rem;
    }

    > div {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        > img {
            height: 500px;
            display: none;
        }
        > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
    }

    .missao-valores {
        margin-top: 2rem;
        > p {
            margin-top: 1rem;
            padding-bottom: 1rem;
        }
    }

    > img {
        margin-top: 2rem;
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        .missao-valores {
            margin-top: 0;
        }
        > div {
            > img {
                display: block;
            }
            > div {
                width: 70%;
            }
        }
    }
`;
