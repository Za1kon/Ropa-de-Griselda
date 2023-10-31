import styled from "styled-components"
import { ButtonProps } from "../vite-env"
export const BgDiv: React.FC<ButtonProps> = ({ clicked }) => {
  return (
    <BgDivStyled className={`initial ${clicked ? 'active' : ''}`} />
  )
}
const BgDivStyled = styled.div`
  background-color: #000a;
  position: absolute;
  top: -100vh;
  &.active {
    top: 0;
    width: 100%;
    height: 100vh;
    min-height: 42em;
  }
`