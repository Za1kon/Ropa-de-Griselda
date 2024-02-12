import styled from "styled-components"
import { Card } from "../components/Card"
import "../css/Animation.css"
const facebookStyle = {
  color: '#359'
}
const instagramStyle = {
  color: '#D24F53'
}
const whatsappStyle = {
  color: '#29A61A'
}
const FacebookIcon = () => <i className="fa-brands fa-square-facebook fa-2xl" style={facebookStyle}></i>;
const InstagramIcon = () => <i className="fa-brands fa-square-instagram fa-2xl" style={instagramStyle}></i>
const WhatsappIcon = () => <i className="fa-brands fa-square-whatsapp fa-2xl" style={whatsappStyle}></i>; 
export const Contact = () => {
  return (
    <ContactStyled>
      <div className="animation">
        <Card variant="contact"
          title="Facebook"
          paragraph="Esta es nuestra página de Facebook"
          link="Facebook"
          icon={ <FacebookIcon /> } />
        <Card variant="contact"
          title="Instagram"
          paragraph="También puedes revisar nuestro Instagram"
          link="Instagram"
          icon={ <InstagramIcon /> } />
        <Card variant="contact"
          title="Whatsapp"
          paragraph="Aquí está nuestro número de Whatsapp"
          link="Whatsapp"
          icon={ <WhatsappIcon /> } />
      </div>
    </ContactStyled>
  )
}
const ContactStyled = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100dvh;
    min-height: 42em;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: #4006;
    z-index: -100;
`