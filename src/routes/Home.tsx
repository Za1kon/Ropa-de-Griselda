import styled from "styled-components"
import bgc from '../assets/bgc.jpg'
export const Home = () => {
  return (
    <HomeStyled>
      <div className="container">
        <div>
          <h2>Introducción:</h2>
          <p>Somos Griselda y Soledad, madre e hija, y estamos emocionadas de presentarte nuestra tienda en línea, Gris y Sole.</p>
        </div>
        <div>
          <h2>Nuestra Colección:</h2>
          <p>Si bien nos especializamos en vestidos de religión, estamos emocionadas de ampliar nuestro catálogo en el futuro, ¡así que mantente atento a las emocionantes novedades que vendrán!</p>
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
    background: url(${bgc});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -100;
    .container{
      padding: 1em;
      width: 100%;
      background-color: #3695;
      display: flex;
      @media(max-width: 1023px){
        flex-direction: column;
      }
      justify-content: center;
      align-items: start;
      div{
        height: 100%;
        flex-grow: 1;
        p{
          padding: 0 clamp(1vw, .1em, 3vw);
          font-size: 1em;
          @media(max-width: 767px){
            font-size: 1.1em;
          }
          @media(min-width: 1024px){
            padding: 0 5em;
            padding: 0 clamp(0vw, 2em, 10vw);
            font-size: 1.6em;
          }
          font-family: Arial, Helvetica, sans-serif;
        }
      }
    }
`