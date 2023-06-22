/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { Stack, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import QueryMedia from '../hook/QueryMedia';

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
        right: 0,
        left: 0,
        alignItems: 'center',
        // bgcolor: 'var',
      } }
      style={ { backgroundColor: 'var(--background)' } }
    >
      <Stack
        direction={ { xs: 'row', sm: 'row' } }
        spacing={ 2 }
        sx={ { alignItems: 'center', width: '100vw' } }
      >
        <Box
          align="start"
          sx={ { flexGrow: 1 } }
          style={ {
            backgroundColor: 'var(--background)',
            color: 'var(--paragraph)',
          } }
        >
          Jonathan Santos
          <span>&copy;</span>
          , 2023
        </Box>
        <Box
          display="flex"
          align="center"
          sx={ { flexGrow: 0 } }
          style={ { backgroundColor: 'var(--background)' } }
        >
          <Typography
            align="large"
            sx={ { flexGrow: 0 } }
            style={ {
              textAlign: 'center',
              marginTop: '5px',
              marginRight: '10px',
              color: 'var(--paragraph)',
            } }
          >
            { QueryMedia() ? 'Feito em  React Material UI.' : ''}
          </Typography>

          <IconButton
            size="large"
            color="primary"
            // backgroudcolor="white"
            style={ { backgroundColor: 'var(--background)', color: 'var(--paragraph)' } }
            sx={ { p: 0.1 } }
            href="https://github.com/JonathanProjetos"
            target="_blank"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            size="large"
            color="primary.main"
            sx={ { p: 0.1 } }
            style={ {
              backgroundColor: 'var(--background)',
              color: 'var(--paragraph)',
              marginRight: '30px',
              marginLeft: '10px',
            } }
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
