import styled from "styled-components"
type CardProps = {
    title: string;
    paragraph: string;
    link?: string;
    icon?: React.ReactNode;
    variant?: string;
    clicked?: boolean;
  }
export const Card: React.FC<CardProps> = ({ title, paragraph, link, icon, variant }) => {
  return (
    <CardStyled variant={variant}>
      <h2>{ title }</h2>
      <p>{ paragraph }</p>
      <div className="container">
        <a href={ link }>
          { icon }
        </a>
      </div>
      <div className="rope1"></div>
      <div className="rope2"></div>
    </CardStyled>
  )
}
const CardStyled = styled.div<{ variant?: string }>`
  position: relative;
  border-radius: 10px;
  border: #000;
  border-style: groove ridge ridge groove;
  padding: 0 .8em .5em;
  margin-left: .5em;
  background: #232323;
  width: 80%;
  max-width: 35em;
  @media(min-width: 768px){
    width: 70%;
  }
  @media(min-width: 1024px){
    width: 90%;
    max-width: 38em;
  }
  &::before {
      content: '';
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 6px 6px 5px #000, -6px -6px 5px ${(props) =>
        props.variant === 'contact' ? '#fcc' : '#fd9'};
      @media(min-width: 768px){
        box-shadow: 8px 8px 5px #000, -8px -8px 5px ${(props) =>
          props.variant === 'contact' ? '#fcc' : '#fd9'};
      }
      z-index: -20;
    }
  h2{
    position: relative;
    top: -.4em;
    left: 50%;
    margin: 0 auto;
    border: #000;
    border-style: none ridge ridge groove ;
    border-radius: 12px;
    padding: .1em .4em 0;
    display: inline-block;
    transform: translateX(-50%);
    background: #232323;
    background-size: cover;
    color: #F2BEB1;
    text-align: center;
    text-shadow: 1px 1px 2px #000;
    font-family: 'Griffy', sans-serif;
    font-size: 1.4em;
    @media(max-width: 320px){
      font-size: 1.2em;
    }
    @media(min-width: 1024px){
      font-size: 1.6em;
    }
    &::before {
      content: '';
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 3px 3px 4px #000, -3px -3px 4px ${(props) =>
        props.variant === 'contact' ? '#fcc' : '#fd9'};
      z-index: -15;
    }
  }
  p{
    margin: 0 .2em .5em;
    color: #F2BEB1;
    text-align: center;
    text-shadow: 1px 1px 2px #000;
    line-height: 1.2em;
    font-family: 'Poppins', sans-serif;
    font-size: 1.05em;
    @media(max-width: 320px){
      font-size: .9em;
    }
    @media(min-width: 768px){
      font-size: 1em;
    }
    @media(min-width: 1024px){
      padding: 0 2em .5em;
      font-size: 1.2em;
    }
  }
  .container{
    display: ${(props) =>
      props.variant === 'contact' ? 'flex' : 'none'} !important;
    width: 100%;
    height: 4em;
    align-items: center;
    justify-content: center;
    a{
      font-size: 1.3em;
    }
  }
  .rope1{
    position: absolute;
    top: -90vh;
    left: 15%;
    height: 90vh;
    border: .6em #000;
    border-style: none groove;
    padding: .3em;
    transform: translateX(-50%);
    z-index: -10;
  }
  .rope2{
    position: absolute;
    top: -90vh;
    left: 85%;
    height: 90vh;
    border: .6em #000;
    border-style: none groove;
    padding: .3em;
    transform: translateX(-50%);
    z-index: -10;
  }
`