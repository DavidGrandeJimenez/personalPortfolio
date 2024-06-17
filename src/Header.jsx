import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ButtonAppBar() {

  const [language, setLanguage] = useState('EN');

  const buttonStyles = {
    color: 'white',
    padding: '1rem',
    transition: '0.3s, color 0.10s',
    '&:hover': {
      transform: 'rotateX(360deg)',
    }
  }

  const linkStyle = {
    fontSize: '1.3rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.567)',
    '&:hover': {
      color: 'white',
    }
  }
  const contentMenu = [{ en: 'Home', es: 'Bienvenida', de: 'Willkommen' }, { en: 'Projects', es: 'Proyectos', de: 'Projekten' }, { en: 'About&Contact', es: 'Sobre mí y Contacto', de: 'Über mich & Kontact' }]

  const setContentMenu = (num) => {
    switch (language) {
      case 'EN': return contentMenu[num].en;
      case 'ES': return contentMenu[num].es;
      case 'DE': return contentMenu[num].de;
      default: return 'Error choosing language';
    }
  }

  const styleLanguage = (lang) => {
    switch (language) {
      case lang: return 'white';
      default: return '';
    }
  }

  const languageEN = () => {
    setLanguage('EN');
  }

  const clickLanguageEN = () => {
    languageEN();
  }
  const languageES = () => {
    setLanguage('ES');
  }

  const clickLanguageES = () => {
    languageES();
  }
  const languageDE = () => {
    setLanguage('DE');
  }

  const clickLanguageDE = () => {
    languageDE();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        background: 'linear-gradient(180deg, black, 70%, #0e1128)',
        paddingBottom: '1.2rem',
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <div style={{ flexGrow: 1 }}>
            <Button sx={buttonStyles} onClick={clickLanguageEN}><Typography sx={linkStyle}><span style={{ color: styleLanguage('EN') }}>EN</span></Typography></Button>
            <Button sx={buttonStyles} onClick={clickLanguageES}><Typography sx={linkStyle}><span style={{ color: styleLanguage('ES') }}>ES</span></Typography></Button>
            <Button sx={buttonStyles} onClick={clickLanguageDE}><Typography sx={linkStyle}><span style={{ color: styleLanguage('DE') }}>DE</span></Typography></Button>
          </div>
          <Button sx={buttonStyles}>{<Link to="/" style={{ textDecoration: 'none' }}><Typography sx={linkStyle}>{setContentMenu(0)}</Typography></Link>}</Button>
          <Button sx={buttonStyles}>{<Link to="/proyects" style={{ textDecoration: 'none' }}><Typography sx={linkStyle}>{setContentMenu(1)}</Typography></Link>}</Button>
          <Button sx={buttonStyles}>{<Link to="/about" style={{ textDecoration: 'none' }}><Typography sx={linkStyle}>{setContentMenu(2)}</Typography></Link>}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}