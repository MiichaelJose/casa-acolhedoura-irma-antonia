import styled from "styled-components";

export const Main = styled.div`
    text-align: center;

    > h2,
    h3 {
        margin-top: 2rem;
    }

    .subtitle {
        > p {
            margin-top: 1rem;
        }
    }

    .donation {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 2rem;
        background-color: #ffffcc;

        img {
            height: 48px;
        }

        p,
        h4 {
            margin-top: 1rem;
        }

        > div {
            padding: 2rem;
        }
    }

    @media screen and (min-width: 768px) {
        .donation {
            flex-direction: row;
        }
    }
`;
