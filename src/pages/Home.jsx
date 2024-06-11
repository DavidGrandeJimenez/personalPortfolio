import './Home.css'
import Typing from '../typing.js';
import { useState } from 'react';
import gif from '../assets/gif3.gif'
import gif2 from '../assets/gif5.gif'


export default function Home() {
  const [isInside, setInside] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inName, setInName] = useState(false);
  const [temporaryTitleClass, setTemporaryTitleClass] = useState({ name: "animate__backInLeft", surname: "animate__backInRight" })


  const handleMouseOverSurname = () => { setInside(true); }
  const handleMouseOutSurname = () => { setInside(false); }
  const handleMouseOverName = () => { setInside(true); setInName(true); }
  const handleMouseOutName = () => { setInside(false); setInName(false); }

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });

  }


  const temporaryClassName = () => {
    setTimeout(() => {
      setTemporaryTitleClass({ name: 'animate__pulse animate__infinite animate__slow', surname: 'animate__pulse animate__infinite animate__slow' })
    }, 1500);
  }

  const cursorStyle = {
    visibility: position.y > 90 ? 'visible' : 'hidden',
    width: isInside ? '5vw' : '3vw',
    height: isInside ? '5vw' : '3vw',
    position: isInside ? 'absolute' : 'absolute',
    transform: `translate(${position.x}px, ${position.y}px)`,
    backgroundColor: inName ? '#7f1464' : '#506899',
    transition: 'width 0.5s ease, height 0.5s ease, background-color 0.1s ease'
  }


  return (
    <>
      <section className="welcome-section" style={{ cursor: 'none' }} onMouseMove={handleMouseMove}>
        <aside><img src={gif} alt="white" className="whitePlant" /></aside>
        <div className="home">
          <div className="circleCursor" style={cursorStyle}></div>
          <h1 className="title" >
            <span className={`name animate__animated ${temporaryTitleClass.name} ${temporaryClassName()}`} onMouseOver={handleMouseOverName} onMouseOut={handleMouseOutName}>DAVID</span>
            <span className={`surname animate__animated ${temporaryTitleClass.surname} ${temporaryClassName()}`} onMouseOver={handleMouseOverSurname} onMouseOut={handleMouseOutSurname}>GRANDE</span>
          </h1>
          <p className="subtitle animate__animated animate__backInUp" onMouseOver={handleMouseOverSurname} onMouseOut={handleMouseOutSurname}><Typing></Typing></p>
        </div>
        <aside><img src={gif2} alt="rosa" className="rosePlant" /></aside>
      </section>
    </>)
}