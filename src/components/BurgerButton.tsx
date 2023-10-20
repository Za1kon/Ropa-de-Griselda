import styled from "styled-components"
type BurgerButtonProps = {
  handleClick: () => void;
  clicked: boolean;
}
export const BurgerButton: React.FC<BurgerButtonProps> = ({ handleClick, clicked }) => {
  return (
    <Burger>
        <div onClick={handleClick} 
             className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </Burger>
  )
}
const Burger = styled.div`
.nav-icon-5{
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.nav-icon-5 span{
  background-color:#000;
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