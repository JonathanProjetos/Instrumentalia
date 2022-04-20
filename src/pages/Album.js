import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carregando from '../components/Carregando';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      valorApi: '',
      albumNãoFiltrado: '',
    };
  }

  componentDidMount() {
    this.getMusic();
  }

  getMusic= async () => {
    const { match: { params: { id } } } = this.props;

    this.setState({
      loading: true,
    });

    const resultadoApi = await getMusics(id);

    // foi filtrado devido o indice 0 não e uma musica e sim um video.
    const resultadoApiFiltrado = resultadoApi.filter((music, index) => index !== 0);

    this.setState({
      loading: false,
      valorApi: resultadoApiFiltrado,
      albumNãoFiltrado: resultadoApi[0],
    });
  }

  render() {
    const { valorApi, loading, albumNãoFiltrado } = this.state;
    return (
      <div data-testid="page-album">
        <Header />

        <div>
          <p
            data-testid="artist-name"
          >
            {`Nome do Artista: ${albumNãoFiltrado.artistName}`}
          </p>

          <p data-testid="album-name">
            {`Album: ${albumNãoFiltrado.collectionName}`}
          </p>
        </div>

        <section>
          {loading ? <Carregando /> : (

            valorApi.map((music) => (

              <div key={ music.trackId }>

                <MusicCard
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                />

              </div>
            ))
          )}
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
