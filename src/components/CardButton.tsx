import styled from "styled-components"
import { ButtonProps } from "../vite-env"
export const CardButton: React.FC<ButtonProps> = ({ handleClick, clicked }) => {
  return (
    <CardButtonStyled
    className={`bx bxs-right-arrow ${clicked ? 'bx-rotate-180' : ''} bx-md ${clicked ? 'moved' : ''}`}
    onClick={handleClick} />
  )
}
const CardButtonStyled = styled.i`
  @media(min-width: 768px){
    display: none;
  }
  position: absolute;
  top: 40%;
  left: 80%;
  &.moved{
    left: 5%;
  }
  transition: all .2s;
`