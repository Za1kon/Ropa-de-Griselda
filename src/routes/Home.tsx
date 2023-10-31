import { useState } from "react"
import styled from "styled-components"
import bgc from '../assets/bgc.jpg'
import { Card } from "../components/Card"
import { CardButton } from "../components/CardButton"
export const Home = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <HomeStyled>
      <div className="container">
        <div className={`container__cards ${clicked ? 'hidden' : ''}`}>
          <Card
          tittle="Introducción:"
          paragraph="Somos Griselda y Soledad, madre e hija, y estamos emocionadas de presentarte nuestra tienda en línea, GrisySol." />
          <Card
          tittle="Nuestra Colección:"
          paragraph="Si bien nos especializamos en vestidos de religión, estamos emocionadas de ampliar nuestro catálogo en el futuro, ¡así que mantente atento a las emocionantes novedades que vendrán!" />
        </div>
          <CardButton clicked={clicked} handleClick={handleClick}/>
        <div className={`container__cards ${clicked ? '' : 'hidden'}`}>
          <Card
          tittle="Cosas:"
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis distinctio non enim? Placeat nulla voluptatum possimus blanditiis quisquam magni nesciunt velit, voluptatibus, soluta iusto distinctio voluptatem totam quis. Sit, corporis.' />
          <Card
          tittle="Otras Cosas:"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis distinctio non enim? Placeat nulla voluptatum possimus blanditiis quisquam magni nesciunt velit, voluptatibus, soluta iusto distinctio voluptatem totam quis. Sit, corporis." />
        </div>
      </div>
    </HomeStyled>
  )
}
const HomeStyled = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    min-height: 42em;
    @media(min-width: 1024px){
      min-height: 50em;
    }
    background: url(${bgc});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -100;
    .container{
      position: relative;
      top: 3em;
      padding: 1em;
      display: grid;
      grid-template-columns: 1fr 1fr;
      @media(max-width: 767px){
        grid-template-columns: none;
      }
      align-items: start;
      @media(max-width: 1023px){
        flex-direction: column;
      }
      &__cards{
        display: flex;
        flex-direction: column;
        align-items: start;
        &:last-child{
          align-items: end;
        }
        @media (min-width: 768px){
          align-items: center;
        }
      }
    }
    .hidden{
      @media (max-width: 767px){
        display: none;
      }
    }
`