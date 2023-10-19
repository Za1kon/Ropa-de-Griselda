import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { BurguerButton } from './BurguerButton'
export const Header = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    if (window.matchMedia('(max-width: 767px)').matches) setClicked(!clicked)
  }
  return (
    <HeaderStyled>
      <img src={logo} alt="Logo"/>
      <nav className={`links ${clicked ? 'active' : ''}`}>
        <NavLink to='/' onClick={handleClick}>Inicio</NavLink>
        <NavLink to='/religion-clothing' onClick={handleClick}>Ropa de Religion</NavLink>
        <NavLink to='/reviews' onClick={handleClick}>Reseñas</NavLink>
        <NavLink to='/contact' onClick={handleClick}>Contacto</NavLink>
      </nav>
      <div className='burguer'>
      <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.header`
  width: 100%;
  height: 6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 8em;
  }
  .links {
    position: absolute;
    top: -700px;
    text-align: center;
    @media(min-width: 768px){
      position: initial;
    }
    a{
      margin-right: 2em;
      display: inline;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: .9em;
      text-decoration: none;
      color: #222;
      @media(max-width: 767px){
        margin: 1em 0 0;
        display: block;
        font-size: 1.3em;
        color: #fff;
      }
      &.active{
        @media(min-width: 768px){
        border-bottom: 1px solid #222;
      }
        @media(max-width: 767px){
        color: #7ad;
      }
      }
    }
    &.active{
      position: absolute;
      top: 30%;
      left: 0;
      right: 0;
      z-index: 100;
    }
  }
  .burguer {
    margin-right: 1em;
    z-index: 20;
    @media(min-width: 768px){
      display: none;
    }
  }
`
const BgDiv = styled.div`
  background-color: #000a;
  position: absolute;
  top: -100vh;
  transition: all .1s ease;
  &.active{
    top: 0;
    width: 100%;
    height: 100vh;
  }
`