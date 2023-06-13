import React from 'react';
// import Context from '../context/Context';
import { Stack, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      position="fixed"
      color="white"
      component="footer"
      sx={ {
        p: 2,
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
        bgcolor: 'black',
      } }
    >
      <Stack
        direction={ { xs: 'column', sm: 'row' } }
        spacing={ 2 }
        sx={ { alignItems: 'center', width: '100vw' } }
      >
        <Box
          align="start"
          sx={ { flexGrow: 1 } }
        >
          Jonathan Santos
          <span>&copy;</span>
          , 2022
        </Box>
        <Box
          display="flex"
          align="center"
          sx={ { flexGrow: 0 } }
        >
          <Typography
            align="large"
            sx={ { flexGrow: 0 } }
          >
            Feito em  React Material UI é Styled Components.
          </Typography>

          <IconButton
            size="large"
            color="primary"
            backgroudcolor="white"
            sx={ { p: 0, pl: 2, color: 'MarromRico' } }
            href="https://github.com/JonathanProjetos"
            target="_blank"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            size="large"
            color="primary.main"
            sx={ { p: 0, pl: 2, pr: 7, color: 'white' } }
            href="https://www.linkedin.com/in/jonathan-jhon/"
            target="_blank"
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>

        </Box>
      </Stack>
    </Box>
  );
}
export default Footer;
