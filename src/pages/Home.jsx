import '../App.css'
import Typing from '../typing.js';
import { useState } from 'react';



export default function Home() {
  const [isInside, setInside] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inName, setInName] = useState(false);

  const handleMouseOverSurname = () => { setInside(true); }
  const handleMouseOutSurname = () => { setInside(false); }
  const handleMouseOverName = () => { setInside(true); setInName(true); }
  const handleMouseOutName = () => { setInside(false); setInName(false); }

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });  

  }

  const cursorStyle = {
    visibility: position.y>90 ? 'visible' : 'hidden',
    width: isInside ? '5vw' : '3vw',
    height: isInside ? '5vw' : '3vw',
    position: isInside ? 'absolute' : 'absolute',
    transform: `translate(${position.x}px, ${position.y}px)`,
    backgroundColor: inName ? '#7f1464' : '#506899',
    transition: 'width 0.5s ease, height 0.5s ease, background-color 0.1s ease'
  }


  return (  
    <>
      <section id="welcome-section" style={{cursor: 'none'}} onMouseMove={handleMouseMove}>
        <div id="home">
          <div className="circleCursor" style={cursorStyle}></div>
          <h1 className="lg-heading" >
            <span className='underline-secondary animate__animated animate__backInLeft' onMouseOver={handleMouseOverName} onMouseOut={handleMouseOutName}>DAVID</span>
            {<span className="underline-third animate__animated animate__backInRight" onMouseOver={handleMouseOverSurname} onMouseOut={handleMouseOutSurname}>GRANDE</span>}
          </h1>
          <p className="subtitle animate__animated animate__backInUp" onMouseOver={handleMouseOverSurname} onMouseOut={handleMouseOutSurname}><Typing></Typing></p>
        </div>
      </section>
    </>)
}