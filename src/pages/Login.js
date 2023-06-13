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
    <Container component="main" maxWidth="xs">
      { login ? <Carregando /> : (
        <Box
          sx={ {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <Box component="form">
            <Typography variant="h2">Instrumentalia</Typography>
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
                color="secondary"
                type="button"
                data-testid="login-submit-button"
                disabled={ loginName.length < SIX }
                onClick={ handleClick }
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
/*
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
*/
