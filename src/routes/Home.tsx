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
        <div className={`container__cards ${clicked ? 'hidden' : ''} ${clicked ? '' : 'animation'}`}>
          <Card
          tittle="Introducción"
          paragraph="Somos Griselda y Soledad, madre e hija, y estamos emocionadas de presentarte nuestra tienda en línea, GrisySol." />
            <CardButton handleClick={handleClick} />
          <Card
          tittle="Nuestra Colección"
          paragraph="Si bien nos especializamos en vestidos de religión, estamos emocionadas de ampliar nuestro catálogo en el futuro, ¡así que mantente atento a las emocionantes novedades que vendrán!" />
        </div>
        <div className={`container__cards ${clicked ? '' : 'hidden'} ${clicked ? 'animation' : ''}`}>
          <Card
          tittle="Algunas Cosas"
          paragraph='Los ríos serpenteaban entre los bosques antiguos, creando un paisaje pintoresco y tranquilo. El sol se filtraba entre las hojas, pintando destellos dorados sobre la superficie del agua, mientras los pájaros cantaban en armonía.' />
            <CardButton moved="moved" handleClick={handleClick} />
          <Card
          tittle="Otras Cosas"
          paragraph="En la bulliciosa ciudad, el vaivén constante de personas llenaba las calles. Luces brillantes iluminaban los escaparates de tiendas variadas. El aroma de comida callejera mezclado con el sonido de conversaciones animadas creaba un ambiente vibrante y acogedor." />
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
    overflow: hidden;
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
        transition: translate 0.3s;
        @media(min-width: 768px){
          animation-name: rebote;
          animation-duration: .5s;
          animation-timing-function: ease-in-out;
          gap: 3em;
        }
        display: flex;
        flex-direction: column;
        align-items: start;
        &:last-child{
          @media (max-width: 767px){
            align-items: end;
          }
        }
        @media (min-width: 768px){
          align-items: center;
        }
      }
    }
    .hidden{
      @media (max-width: 767px){
        margin: 0 2em;
        position: absolute;
        translate: 0 -200vh;
      }
    }
    .animation{
      @keyframes rebote {
        0% {
          transform: translateY(-210vh);
        }
        50% {
          transform: translateY(10vh);
        }
      }
      @media (max-width: 767px){
        animation-name: rebote;
        animation-duration: .5s;
        animation-timing-function: ease-in-out;
      }
    }
`