import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useStore from './components/useStore.js';
import { Link } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';

export default function ButtonAppBar() {

  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);

  const menuStyle = {
    color: 'rgba(255, 255, 255, 0.567)',
    '&:active': {
      color: 'white',
    },
    backgroundColor: 'black',
    padding: '0.1rem',

  }

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
  const contentMenu = [{ en: 'Home', es: 'Bienvenida', de: 'Willkommen' }, { en: 'Projects', es: 'Proyectos', de: 'Projekte' }, { en: 'About&Contact', es: 'Sobre mí y Contacto', de: 'Über mich & Kontact' }]

  const setContentMenu = (num) => {
    switch (language) {
      case 'EN': return contentMenu[num].en;
      case 'ES': return contentMenu[num].es;
      case 'DE': return contentMenu[num].de;
      default: return contentMenu[num].en;
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


  const [anchorEl, setAnchorEl] = useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            sx={{ mr: 2, display: { xs: 'block', sm: 'block', md:'none' } }}
            onClick={handleMenu}
          ><MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md:'block' } }}>
            <Button sx={buttonStyles} onClick={clickLanguageEN}><Typography sx={linkStyle}><span style={{ color: styleLanguage('EN') }}>EN</span></Typography></Button>
            <Button sx={buttonStyles} onClick={clickLanguageES}><Typography sx={linkStyle}><span style={{ color: styleLanguage('ES') }}>ES</span></Typography></Button>
            <Button sx={buttonStyles} onClick={clickLanguageDE}><Typography sx={linkStyle}><span style={{ color: styleLanguage('DE') }}>DE</span></Typography></Button>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', md:'block' } }}>
            <Button sx={buttonStyles}>{<Link to="/" style={{ textDecoration: 'none' }}><Typography sx={linkStyle}>{setContentMenu(0)}</Typography></Link>}</Button>
            <Button sx={buttonStyles}>{<Link to="/proyects" style={{ textDecoration: 'none' }}><Typography sx={linkStyle}>{setContentMenu(1)}</Typography></Link>}</Button>
            <Button sx={buttonStyles}>{<Link to="/about" style={{ textDecoration: 'none' }}><Typography sx={linkStyle}>{setContentMenu(2)}</Typography></Link>}</Button>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} sx={menuStyle}><Button sx={buttonStyles}>{<Link to="/" style={{ textDecoration: 'none' }}><Typography sx={linkStyle}>{setContentMenu(0)}</Typography></Link>}</Button></MenuItem>

            <MenuItem onClick={handleClose} sx={menuStyle}><Button sx={buttonStyles}>{<Link to="/proyects" style={{ textDecoration: 'none' }}><Typography sx={linkStyle}>{setContentMenu(1)}</Typography></Link>}</Button></MenuItem>

            <MenuItem onClick={handleClose} sx={menuStyle}><Button sx={buttonStyles}>{<Link to="/about" style={{ textDecoration: 'none' }}><Typography sx={linkStyle}>{setContentMenu(2)}</Typography></Link>}</Button></MenuItem>

            <MenuItem onClick={handleClose} sx={menuStyle}><Button sx={buttonStyles} onClick={clickLanguageEN}><Typography sx={linkStyle}><span style={{ color: styleLanguage('EN') }}>EN</span></Typography></Button></MenuItem>

            <MenuItem onClick={handleClose} sx={menuStyle}><Button sx={buttonStyles} onClick={clickLanguageES}><Typography sx={linkStyle}><span style={{ color: styleLanguage('ES') }}>ES</span></Typography></Button></MenuItem>

            <MenuItem onClick={handleClose} sx={menuStyle}><Button sx={buttonStyles} onClick={clickLanguageDE}><Typography sx={linkStyle}><span style={{ color: styleLanguage('DE') }}>DE</span></Typography></Button></MenuItem>

          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}