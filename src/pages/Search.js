/* eslint-disable max-len */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Header from '../components/Header';
import Carregando from '../components/Carregando';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import CardMusic from '../components/CardMusic';

function Search() {
  const ONE = 1;
  const [nomeArtista, setNomeArtista] = useState('');
  const [albuns, setAlbuns] = useState('');
  const [loading, setLoading] = useState(false);

  console.log(nomeArtista);

  const handleChange = ({ target }) => {
    const { value } = target;
    setNomeArtista(value);
  };

  const handleClick = async () => {
    setLoading(true);
    const retornoApi = await searchAlbumsAPI(nomeArtista);
    setLoading(false);
    localStorage.setItem('albuns', JSON.stringify(retornoApi));
    setAlbuns(retornoApi);
  };

  useEffect(() => {
    if (albuns.length === 0) {
      const albunsStorage = JSON.parse(localStorage.getItem('albuns')) || [];
      setAlbuns(albunsStorage);
    }
  }, [albuns]);

  return (
    <Box>
      <Header />
      <Box
        sx={ {
          width: '98vw',
          height: '90vh',
          flexDirection: 'column',
        } }
      >
        {loading ? <Carregando /> : (
          <Box>
            <Box>
              <Box
                sx={ {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '40px',
                  marginBottom: '40px',
                } }
              >
                <Input
                  name="nomeArtista"
                  type="text"
                  data-testid="search-artist-input"
                  onChange={ (event) => handleChange(event) }
                  placeholder="search a song"
                  style={ {
                    borderBottom: '2px solid #6b6b6b',
                    color: 'white',
                    fontSize: '18px',
                    // marginBottom: '40px',
                  } }
                />
                <Button
                  type="submit"
                  data-testid="search-artist-button"
                  onClick={ handleClick }
                  disabled={ nomeArtista.length < ONE }
                  style={ {
                    backgroundColor: 'var(--background)',
                    fontSize: '18px',
                    color: '#6b6b6b',
                  } }
                >
                  Search
                </Button>
              </Box>
              <Box
                sx={ {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                } }
                style={ { maginButtom: '100px' } }
              >
                <Grid
                  container
                  spacing={ 4 }
                  columnSpacing={ { xs: 1, sm: 2, md: 3 } }
                  xs={ 8 }
                >
                  { albuns && albuns.map((
                    { artworkUrl100, collectionName, price, ReleaseDate, collectionId },
                    i,
                  ) => (
                    <Grid
                      item xs={ 12 } sm={ 6 } md={ 3 }
                      key={ i }
                    >
                      <CardMusic
                        artworkUrl100={ artworkUrl100 }
                        collectionName={ collectionName }
                        price={ price }
                        ReleaseDate={ ReleaseDate }
                        collectionId={ collectionId }
                      />
                    </Grid>
                  ))}

                </Grid>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
export default Search;
