import styled from "styled-components"
type CardProps = {
    tittle: string;
    paragraph: string;
  }
export const Card: React.FC<CardProps> = ({ tittle, paragraph }) => {
  return (
    <CardStyles>
        <h2>{ tittle }</h2>
        <p>{ paragraph }</p>
    </CardStyles>
  )
}
const CardStyles = styled.div`
    width: 80%;
    @media(min-width: 768px){
      width: 70%;
    }
    @media(min-width: 1024px){
      width: 90%;
      max-width: 768px;
    }
    height: 100%;
    h2{
      color: #111;
      font-family: 'Quicksand', sans-serif;
      font-size: 1.3em;
      @media(max-width: 320px){
        font-size: 1.2em;
      }
      @media(min-width: 1024px){
        font-size: 1.6em;
      }
    }
    p{
      padding: 0 clamp(1vw, .1em, 3vw);
      font-size: 1.05em;
      @media(max-width: 320px){
        font-size: .9em;
      }
      @media(min-width: 768px){
        font-size: 1em;
      }
      @media(min-width: 1024px){
        padding: 0 5em;
        padding: 0 clamp(0vw, 2em, 10vw);
        font-size: 1.2em;
      }
      font-family: 'Quicksand', sans-serif;
      font-weight: 500;
      color: #112;
    }
`