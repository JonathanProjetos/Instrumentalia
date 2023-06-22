/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/jsx-key */
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeMobile  } from '../style/ToogleTheme';
import Context from '../context/Context';

const styleLink = {
  textDecoration: 'none',
  color: 'black',
};

const pages = [
  <Link style={ styleLink } to="/search">Search</Link>,
  <Link style={ styleLink } to="/favorites">Favorites</Link>,
  <Link style={ styleLink } to="/profile">Profile</Link>,
];

function HomeMobile() {
  const { theme, setTheme } = useContext(Context);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const setMode = (mode) => {
    window.localStorage.setItem('themeTunes', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={ { backgroundColor: 'black' } }>
        <Toolbar disableGutters>

          <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={ handleOpenNavMenu }
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={ anchorElNav }
              anchorOrigin={ {
                vertical: 'bottom',
                horizontal: 'left',
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'left',
              } }
              open={ Boolean(anchorElNav) }
              onClose={ handleCloseNavMenu }
              sx={ {
                display: { xs: 'block', md: 'none' },
              } }
            >
              {pages.map((page) => (
                <MenuItem
                  key={ page }
                  onClick={ handleCloseNavMenu }
                >
                  <Typography
                    textAlign="center"
                  >
                    {page}

                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
            {pages.map((page) => (
              <Button
                key={ page }
                onClick={ handleCloseNavMenu }
                sx={ { my: 2, color: 'white', display: 'block' } }
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={ { flexGrow: 0 } }>
            <Typography
              color="white"
            >
              {JSON.parse(localStorage.getItem('user')).name || 'User'}
            </Typography>
          </Box>
          <ThemeMobile
            type="button"
            onClick={ themeToggler }
          >
            <abbr title="Mode">
              {theme === 'light'
                ? <DarkModeIcon
                  id="modeIconDark"
                  style={ {
                    color: 'var(--paragraph)',
                    } }
                />
                : <LightModeIcon id="modeIcon" />}
            </abbr>
          </ThemeMobile>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HomeMobile;
