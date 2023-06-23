import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

function CardMusicDatail({ music, hidden }) {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(checked);
  // console.log(music);

  const saveBotton = async () => {
    setLoading(true);
    setChecked(true);
    if (!checked) {
      await addSong(music);
      setLoading(false);
    } else {
      setLoading(false);
      await removeSong(music);
      setChecked(false);
    }
  };

  const getfavoriteSong = async () => {
    const musicasFavoritas = await getFavoriteSongs();
    const validateCheck = musicasFavoritas.some((elem) => elem.trackId === music.trackId);
    if (validateCheck) {
      setChecked(true);
    }
  };

  useEffect(() => {
    getfavoriteSong();
  }, [checked]);

  return (
    <div className={ `music-card${hidden ? '-hidden' : ''}` }>
      <p>{music.trackName}</p>
      <audio data-testid="audio-component" src={ music.previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code> audio </code>
      </audio>
      { loading ? <p>Carregando...</p> : (
        <label htmlFor="Favorita">
          Favorita
          <input
            id="Favorita"
            name="checked"
            checked={ checked }
            data-testid={ `checkbox-music-${music.trackId}` }
            type="checkbox"
            onClick={ saveBotton }
          />
        </label>
      )}
    </div>
  );
}

CardMusicDatail.propTypes = {
  music: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
  }).isRequired,
  hidden: PropTypes.bool.isRequired,
};

export default CardMusicDatail;
