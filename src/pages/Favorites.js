import React, { Component } from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import Carregando from '../components/Carregando';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      musicFavorites: [],
      loading: false,
      fotoLogo: '',
    };
  }

  componentDidMount() {
    this.getMusicFavorites();
  }

  getMusicFavorites = async () => {
    this.setState({
      loading: true,
    });
    const favoritos = await getFavoriteSongs();

    if (favoritos.length !== 0) {
      console.log('óla');
      this.setState({
        fotoLogo: favoritos[0].artworkUrl100,
      });
    }

    this.setState({
      musicFavorites: [...favoritos],
      loading: false,
    });
  }

  render() {
    const { musicFavorites, loading, fotoLogo } = this.state;
    console.log(musicFavorites);
    return (
      <div data-testid="page-favorites">
        <Header />
        <img src={ fotoLogo } alt="fotoLogo" />
        <Carregando disable={ !loading } />
        {musicFavorites.map((music) => (
          <div key={ music.trackId }>
            <MusicCard
              music={ music }
              hidden={ loading }
            />
          </div>
        ))}
      </div>
    );
  }
}
export default Favorites;
