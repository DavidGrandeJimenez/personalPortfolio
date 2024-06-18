import Typing from '../../typing.js';
import { useState, useEffect } from 'react';
import gif from '../../assets/gif3B.gif'
import gif2 from '../../assets/gif5B.gif'
import './Home.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

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

  const stylesH1 = {
    textAlign: 'center',
    paddingBottom: '7vh',
    fontFamily: 'sans-serif',
    fontWeight:'bold',
    fontSize: { lg: '5rem', md: '5rem', sm: '5rem', xs: '3.5rem' },
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

          <Grid item lg={2} md={2} sm={2} xs={1}>
            <Box sx={{
              '& img': {
                position: 'absolute',
                height: '95%',
                width: '60%',
                top: '5%',
                right: '68%',
                pointerEvents: 'none',
                display:{xs:'none', sm:'block'}
              }
            }}>

              <img src={gif} alt="white" />
            </Box>
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={10} sx={{ maxWidth: '66.666%', marginLeft: { xs: '-20px', sm: '0%', lg: '0', md: '0' } }}>
            <div className="home">
              <div className='circleCursor' style={cursorStyle}></div>

              <Typography variant="h1" component="h1" className="titleHome" sx={stylesH1}>

                <Typography className={`name animate__animated ${temporaryTitleClass.name} ${temporaryClassName()}`} sx={{ fontWeight:'bold', fontSize: 'inherit', marginLeft: { xs: '2.5rem', sm:'0' }, marginBottom:{xs:'1rem', md:'1.6rem'}, lineHeight:'1.165' }} onMouseOver={handleMouseOverName} onMouseOut={handleMouseOutName} >DAVID</Typography>

                <span className={`surname animate__animated ${temporaryTitleClass.surname} ${temporaryClassName()}`} onMouseOver={handleMouseOverSurname} onMouseOut={handleMouseOutSurname}>GRANDE</span>
              </Typography>

              <Box sx={{position:'relative', width:{sm:'100%', xs:'120%'}, fontSize:{lg:'2.5rem', md:'2.5rem', sm:'2.5rem', xs:'1.2rem'}, left:{lg:'1vw', md:'1vw', sm:'1vw', xs:'2rem'}, }}><p className="subtitleHome animate__animated animate__backInUp" onMouseOver={handleMouseOverSurname} onMouseOut={handleMouseOutSurname}><Typing /></p></Box>
            </div>
          </Grid>

          <Grid item lg={2} md={2} sm={1} xs={1}>
            <Box sx={{
              '& img': {
                position: 'absolute',
                width: '62%',
                left: '68%',
                bottom: '-1%',
                transform: 'rotateY(180deg)',
                height: '95%',
                pointerEvents: 'none',
                display:{xs:'none', sm:'block'}
              }
            }}>
              <img src={gif2} alt="rosa" />
            </Box>
          </Grid>

        </Grid>
      </section>
    </>)
}