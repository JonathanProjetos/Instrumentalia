import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { createUser } from '../services/userAPI';
import Carregando from '../components/Carregando';

function Login() {
  const SIX = 6;
  const history = useHistory();

  const [loginName, setLoginName] = useState('');
  const [login, setLogin] = useState(false);

  const handleClick = async () => {
    setLogin(true);
    await createUser({ name: loginName });
    setLogin(false);
    history.push('/search');
  };

  return (
    <Container
      component="main"
      sx={ {
        width: '100vw',
        height: '98vh',
        border: '12px solid green',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: 'url(https://www.geffa.org.br/wp-content/uploads/2019/06/musica-03.png)',
        alignItems: 'center',
      } }
    >
      { login ? <Carregando /> : (
        <Box
          sx={ {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // bgcolor: 'white',
            backgroundColor: 'transparent',
          } }
        >
          <Box
            component="form"
            sx={ {
              borderRadius: '10px',
              border: '2px solid #795548',
              boxShadow: 24,
              height: '50vh',
              width: '40vw',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.6))',
            } }
          >
            <Typography
              component="h1"
              style={ {
                fontFamily: 'Lobster, cursive',
                fontSize: '4rem',
                textAlign: 'center',
              } }
            >
              Instrumentalia
            </Typography>
            <Box
              sx={ {
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              } }
            >
              <TextField
                name="loginName"
                value={ loginName }
                data-testid="login-name-input"
                placeholder="What is your name?"
                type="text"
                onChange={ ({ target }) => setLoginName(target.value) }
              />

              <Button
                color="primary"
                type="button"
                data-testid="login-submit-button"
                disabled={ loginName.length < SIX }
                onClick={ handleClick }
                style={ {
                  marginTop: '20px',
                } }
              >
                { loginName.length < SIX ? 'Close' : 'Play'}
              </Button>
            </Box>
          </Box>
        </Box>)}
    </Container>
  );
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
