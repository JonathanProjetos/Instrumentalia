import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Carregando from '../components/Loading';
import Header from '../components/Header';
import CardMusicDatail from '../components/CardMusicDatail';
import getMusics from '../services/musicsAPI';

function Album(props) {
  const { match: { params: { id } } } = props;

  const [loading, setLoading] = useState(false);
  const [valorApi, setValorApi] = useState([]);
  const [albumNãoFiltrado, setAlbumNãoFiltrado] = useState('');
  console.log(valorApi);

  const getMusic = async () => {
    setLoading(true);
    const resultadoApi = await getMusics(id);
    const resultadoApiFiltrado = resultadoApi.filter((_music, index) => index !== 0);
    setLoading(false);
    setValorApi(resultadoApiFiltrado);
    setAlbumNãoFiltrado(resultadoApi[0]);
  };

  useEffect(() => {
    getMusic();
  }, []);

  // const loadingMagicCard = (bool) => {
  //   setLoading(bool);
  // };

  console.log(albumNãoFiltrado);
  return (
    <main data-testid="page-album">
      <Header />
      <section>
        <div>
          <p
            data-testid="artist-name"
          >
            {`Nome do Artista: ${albumNãoFiltrado.artistName}`}
          </p>

          <p data-testid="album-name">
            {`Album: ${albumNãoFiltrado.collectionName}`}
          </p>
          <div>
            <img src={ albumNãoFiltrado.artworkUrl100 } alt="imagem capa" />
          </div>
        </div>

        <div>
          <Carregando disable={ !loading } />
          {valorApi.map((music) => (
            <div key={ music.trackId }>
              <CardMusicDatail
                music={ music }
                hidden={ loading }
                // loadingMagicCard={ loadingMagicCard }
                // favotitas={ favoritas }
                // valorApi={ valorApi }
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
