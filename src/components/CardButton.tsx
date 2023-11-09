import styled from "styled-components"
import { ButtonProps } from "../vite-env"
export const CardButton: React.FC<ButtonProps> = ({ moved, handleClick }) => {
  return (
    <CardButtonStyled
    className={`bx bxs-right-arrow bx-md ${moved}`}
    onClick={handleClick} />
  )
}
const CardButtonStyled = styled.i`
  @media(min-width: 768px){
    display: none;
  }
  position: relative;
  left: 93%;
  &.moved{
    left: -93%;
    rotate: 180deg;
  }
`