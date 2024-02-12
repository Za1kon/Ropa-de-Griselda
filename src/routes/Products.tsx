import styled from "styled-components"
import { Gallery } from "../components/Gallery"
export const Products = () => {
  return (
    <ProductsStyles>
      <Gallery></Gallery>
    </ProductsStyles>
  )
}
const ProductsStyles = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100dvh;
  min-height: 42em;
  background-color: #0076;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -100;
`