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
import ThemeS from '../Style/ToogleTheme';
import Context from '../context/Context';

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
    window.localStorage.setItem('themeCogny', mode);
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
        <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
        <Link data-testid="link-to-favorites" to="/favorites">Favoritos</Link>
        <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
      </Box>
      <Typography data-testid="header-user-name">
        {
          status ?
          <Typography variant="h6">
            Carregando...
          </Typography> :
          <Typography variant="h7">
            {`Olá ${name}!`}
          </Typography>
        }
      </Typography>
      <ThemeS
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
      </ThemeS>
    </Box>
  );
}
export default Header;
