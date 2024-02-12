import styled from "styled-components"
import { useState, useEffect } from "react"

export const Gallery = () => {
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
    <GalleryStyled>
      <section className="container"></section>
      <section className={`navbar ${ clicked ? 'deployed' : '' }`}>
        <div className='navbar__deploybutton'
        onClick={ handleClick }
        >
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </section>
    </GalleryStyled>
  )
}

const GalleryStyled = styled.section`
  animation: translate 3s;
  position: relative;
  width: 100%;
  height: 80%;
  overflow: hidden;
  display: flex;
  .container{
    height: 100%;
    width: 79.5%;
    border: #000;
    border-style: groove none ridge none;
    background-color: #232323;
  }
  .navbar{
    position: absolute;
    transform: translateX(80%);
    transition: transform .3s ease;
    height: 100%;
    width: 100%;
    border: #000;
    border-style: groove none ridge none;
    background-color: #232323;
    display: flex;
    &__deploybutton{
      height: 100%;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      .line1{
        height: 85%;
        width: .4em;
        border-radius: 5px;
        background-color: #fff;
      }
      .line2{
        height: 85%;
        width: .4em;
        border-radius: 5px;
        background-color: #fff;
      }
    }
  }
  .deployed{
    transform: translateX(0%);
  }
`