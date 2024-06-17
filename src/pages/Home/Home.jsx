import Typing from '../../typing.js';
import { useState, useEffect } from 'react';
import gif from '../../assets/gif3B.gif'
import gif2 from '../../assets/gif5B.gif'
import './Home.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Home() {
  const [isInside, setInside] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inName, setInName] = useState(false);
  const [temporaryTitleClass, setTemporaryTitleClass] = useState({ name: "animate__backInLeft", surname: "animate__backInRight" })

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

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
    position: 'absolute',
    transform: `translate(${position.x}px, ${position.y}px)`,
    backgroundColor: inName ? '#7f1464' : '#506899',
    transition: 'width 0.5s ease, height 0.5s ease, background-color 0.1s ease'
  }


  return (
    <>
      <section className='welcomeSection' style={{ cursor: 'none' }} onMouseMove={handleMouseMove}>
        <Grid container spacing={2} justify="center" alignItems="center">

          <Grid item lg={2} md={2}>
            <Box sx={{
              '& img': {
                position: 'absolute',
                height: {
                  md: '95vh',
                  lg: '20vh'
                },
                width: '60%',
                top: '5%',
                right: '68%',
                pointerEvents: 'none'
              }
            }}>

              <img src={gif} alt="white" className='whitePlant' />
            </Box>
          </Grid>
          <Grid item lg={8} md={8}>
            <div className="home">
              <div className='circleCursor' style={cursorStyle}></div>
              <h1 className="titleHome" >
                <span className={`name animate__animated ${temporaryTitleClass.name} ${temporaryClassName()}`} onMouseOver={handleMouseOverName} onMouseOut={handleMouseOutName}>DAVID</span>
                <span className={`surname animate__animated ${temporaryTitleClass.surname} ${temporaryClassName()}`} onMouseOver={handleMouseOverSurname} onMouseOut={handleMouseOutSurname}>GRANDE</span>
              </h1>
              <p className="subtitleHome animate__animated animate__backInUp" onMouseOver={handleMouseOverSurname} onMouseOut={handleMouseOutSurname}><Typing /></p>
            </div>
          </Grid>

          <Grid item lg={2} md={2}>
            <Box sx={{
              '& img': {
                position: 'absolute',
                width: '62%',
                left: '68%',
                bottom: '-1%',
                transform: 'rotateY(180deg)',
                height: '95%',
                pointerEvents: 'none',
              }
            }}>
              <img src={gif2} alt="rosa" />
            </Box>
          </Grid>

        </Grid>
      </section>
    </>)
}