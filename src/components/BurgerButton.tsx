import styled from "styled-components"
import { ButtonProps } from "../vite-env"
export const BurgerButton: React.FC<ButtonProps> = ({ handleClick, clicked }) => {
  return (
    <BurgerStyled className={`${clicked ? 'bgc__open' : ''}`}>
      <div onClick={handleClick} 
           className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </BurgerStyled>
  )
}
const BurgerStyled = styled.div`
  border-bottom-left-radius: 10px;
  border: #000;
  border-style: groove ridge ridge groove ;
  padding-top: 3em;
  background-color: #232323;
  &.bgc__open{
    border: none;
    padding-top: 0;
    background: none;
  }
  animation-name: header-bounces;
  animation-duration: .25s;
  animation-timing-function: ease-in-out;
.nav-icon-5{
  width: 35px;
  height: 30px;
  margin: 10px 10px 5px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.nav-icon-5 span{
  background-color:#fff;
  position: absolute;
  border-radius: 2px;
  transition: .3s cubic-bezier(.8, .5, .2, 1.4);
  width:100%;
  height: 4px;
  transition-duration: 300ms
}
.nav-icon-5 span:nth-child(1){
  top:0px;
  left: 0px;
}
.nav-icon-5 span:nth-child(2){
  top:13px;
  left: 0px;
  opacity:1;
}
.nav-icon-5 span:nth-child(3){
  bottom:0px;
  left: 0px;
}
.nav-icon-5.open span:nth-child(1){
  background-color:#fff;
  transform: rotate(45deg);
  top: 13px;
}
.nav-icon-5.open span:nth-child(2){
  background-color:#fff;
  opacity:0;
}
.nav-icon-5.open span:nth-child(3){
  background-color:#fff;
  transform: rotate(-45deg);
  top: 13px;
}
`
