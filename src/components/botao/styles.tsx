import styled from "styled-components";

import { Link as link } from "react-router-dom";

interface BotaoProps {
  backgroundcolor: string;
}

export const Link = styled(link)<BotaoProps>`
  display: block;
  background-color: ${(props) => props.backgroundcolor};
  margin-top: 2rem;
  width: 150px;
  height: 35px;
  line-height: 35px;
  text-decoration: none;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.1rem;
  text-align: center;
`;
