import styled from "styled-components"
import bgc from '../assets/bgc.jpg'
export const Home = () => {
  return (
    <HomeStyled>
    </HomeStyled>
  )
}
const HomeStyled = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background: url(${bgc});
    background-size: cover;
    z-index: -100;
`