import styled from "styled-components";
import { Button } from "../ui/button";

export const ButtonIconStyled = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  background: #009DD9;
  transition: all 0.2s ease-in-out;

  svg {
    width: 25px;
    height: 25px;
  }
`;

