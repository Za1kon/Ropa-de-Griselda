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
  position: relative;
  left: 92%;
  &.moved{
    left: -92%;
  }
`