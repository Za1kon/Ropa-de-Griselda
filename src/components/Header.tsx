import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { BurgerButton } from './BurgerButton'
import { BgDiv } from './BgDiv'
export const Header = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    if (window.matchMedia('(max-width: 767px)').matches) setClicked(!clicked)
  }
  const handleResize = () => {
    if (window.matchMedia('(min-width: 768px)').matches) setClicked(false);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <HeaderStyled>
      <Link to='/' className='logo'>
      </Link>
      <nav className={`links ${clicked ? 'active' : ''}`}>
        <NavLink to='/' onClick={handleClick}>Inicio</NavLink>
        <NavLink to='/religion-clothing' onClick={handleClick}>Productos</NavLink>
        <NavLink to='/contact' onClick={handleClick}>Contacto</NavLink>
      </nav>
      <div className='burger'>
        <BurgerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv clicked={clicked} />
    </HeaderStyled>
  )
}
const HeaderStyled = styled.header`
  width: 100%;
  height: 6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    margin-left: 1em;
    margin-top: 2em;
    @media(min-width: 1024px){
      margin-top: 4em;
    }
    &__img {
      width: 7em;
      @media(min-width: 1024px){
        width: 9em;
      }
    }
  }
  .links {
    position: absolute;
    top: -700px;
    text-align: center;
    @media(min-width: 768px){
      position: initial;
      animation-name: header-bounces;
      animation-duration: .25s;
      animation-timing-function: ease-in-out;
    }
    a {
      margin-right: 2em;
      display: inline;
      font-family: 'Poppins', sans-serif;
      text-transform: uppercase;
      font-size: .9em;
      @media(min-width: 768px){
        border: #000;
        border-style: groove ridge ridge groove ;
        padding: 4em 1em 1em;
        border-radius: 5px;
        background-color: #232323;
      }
      @media(min-width: 1024px){
        font-size: 1.09em;
      }
      text-decoration: none;
      color: #fff;
      @media(max-width: 767px){
        margin: 1em 0 0;
        display: block;
        font-size: 1.3em;
      }
      &.active {
        color: #F2BEB1;
      }
    }
    &.active {
      position: absolute;
      top: 30%;
      left: 0;
      right: 0;
      z-index: 100;
    }
  }
  .burger {
    margin-right: 1em;
    z-index: 20;
    @media(min-width: 768px){
      display: none;
    }
  }
`