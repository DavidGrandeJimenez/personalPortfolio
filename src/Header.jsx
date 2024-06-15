import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'


export default function ButtonAppBar() {
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
    fontWeight:'bold',
    color: 'rgba(255, 255, 255, 0.567)',
    '&:hover': {
      color: 'white',
    },
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button sx={buttonStyles}>{<Link to="/" style={{textDecoration: 'none'}}><Typography sx={linkStyle}>Home</Typography></Link>}</Button>
          <Button sx={buttonStyles}>{<Link to="/proyects" style={{textDecoration: 'none'}}><Typography sx={linkStyle}>Proyects</Typography></Link>}</Button>
          <Button sx={buttonStyles}>{<Link to="/about" style={{textDecoration: 'none'}}><Typography sx={linkStyle}>About&Contact</Typography></Link>}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}