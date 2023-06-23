import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import CardMusicDatail from '../components/CardMusicDatail';
import Carregando from '../components/Loading';

function Favorites() {
  const [musicFavorites, setMusicFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fotoLogo, setFotoLogo] = useState('');

  const getMusicFavorites = async () => {
    setLoading(true);
    const favoritos = await getFavoriteSongs();

    if (favoritos.length !== 0) {
      console.log('óla');
      setFotoLogo(favoritos[0].artworkUrl100);
    }
    setMusicFavorites(favoritos);
    setLoading(false);
  };

  useEffect(() => {
    getMusicFavorites();
  }, [musicFavorites]);

  return (
    <div data-testid="page-favorites">
      <Header />
      <img src={ fotoLogo } alt="fotoLogo" />
      <Carregando disable={ !loading } />
      {musicFavorites.map((music) => (
        <div key={ music.trackId }>
          <CardMusicDatail
            music={ music }
            hidden={ loading }
          />
        </div>
      ))}
    </div>
  );
}

export default Favorites;
