/* eslint-disable sonarjs/no-duplicate-string */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
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
    <Box
      component="main"
      sx={ {
        width: '100vw',
        height: '95vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      } }
      style={ {
        backgroundColor: 'var(--background)',
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
            // backgroundColor: 'transparent',
          } }
        >
          <Box
            component="form"
            sx={ {
              // boxShadow: 24,
              height: '50vh',
              width: '40vw',
            } }
          >
            <Typography
              component="h1"
              style={ {
                fontFamily: 'Lobster, cursive',
                fontSize: '7vw',
                textAlign: 'center',
                color: 'var(--paragraph)',
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
              <Input
                name="loginName"
                value={ loginName }
                data-testid="login-name-input"
                placeholder="What is your name?"
                style={ {
                  // border: '3px solid var(--paragraph)',
                  backgroundColor: 'var(--background)',
                  borderBottom: '2px solid var(--paragraph)',
                  // width: '15vw',
                  fontSize: '18px',
                  color: '#6b6b6b',
                  marginBottom: '20px',
                } }
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
                  backgroundColor: 'var(--paragraph)',
                  color: 'var(--headline)',
                } }
              >
                { loginName.length < SIX ? 'Close' : 'Play'}
              </Button>
            </Box>
          </Box>
        </Box>)}
    </Box>
  );
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
