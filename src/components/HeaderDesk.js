/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getUser } from '../services/userAPI';
import { ThemeDesktop } from '../style/ToogleTheme';
import Context from '../context/Context';
import HeaderStyle from '../style/Header';

function Header() {
  const { theme, setTheme } = useContext(Context);
  const [status, setStatus] = useState(true);
  const [name, setName] = useState('');

  const renderHeader = async () => {
    setStatus(true);
    const pegarGetUser = await getUser();
    setStatus(false);
    setName(pegarGetUser.name);
  };

  const setMode = (mode) => {
    window.localStorage.setItem('themeTunes', mode);
    setTheme(mode);
  };

  // cria função para chamar o setMode e trocar o tema
  const themeToggler = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    renderHeader();
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <Box
      data-testid="header-component"
      sx={ {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      } }
    >
      <Box>
        <Link style={ { ...HeaderStyle, marginLeft: '20px' } } to="/search">Search</Link>
        <Link style={ HeaderStyle } to="/favorites">Favorites</Link>
        <Link style={ HeaderStyle } to="/profile">Profile</Link>
      </Box>
      <Box
        sx={ {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        } }
      >
        <Typography data-testid="header-user-name">
          {
            status
            ? <Typography variant="h6">
              Carregando...
              </Typography>
            : <Typography
              variant="h6"
              style={ {
                fontFamily: 'cursive',
                color: 'var(--paragraph)',
              } }
            >
              {`Hello ${name}!`}
              </Typography>
          }
        </Typography>
        <ThemeDesktop
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
        </ThemeDesktop>
      </Box>

    </Box>
  );
}
export default Header;
