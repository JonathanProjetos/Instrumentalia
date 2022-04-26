import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import './MusicCard.css';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
  }

  componentDidMount() {
    this.getfavoriteSong();
  }

  saveBotton = async () => {
    const { music, loadingMagicCard } = this.props;
    const { checked } = this.state;

    this.setState({
      checked: !checked,
    });

    loadingMagicCard(true);
    await addSong(music);
    loadingMagicCard(false);
    if (checked) {
      await removeSong(music);
    }
  }

  getfavoriteSong = async () => {
    const { music } = this.props;
    const musicasFavoritas = await getFavoriteSongs();

    const validateCheck = musicasFavoritas.some((elem) => elem.trackId === music.trackId);
    if (validateCheck) {
      this.setState({
        checked: true,
      });
      await removeSong(music);
    }
  }

  render() {
    const { music, hidden } = this.props;
    const { checked } = this.state;
    return (

      <div className={ `music-card${hidden ? '-hidden' : ''}` }>
        <p>{music.trackName}</p>

        <audio data-testid="audio-component" src={ music.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code> audio </code>
        </audio>
        <label htmlFor="Favorita">
          Favorita
          <input
            id="Favorita"
            name="checked"
            checked={ checked }
            data-testid={ `checkbox-music-${music.trackId}` }
            type="checkbox"
            onChange={ this.saveBotton }
          />
        </label>
      </div>

    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
  }).isRequired,
  hidden: PropTypes.bool.isRequired,
  loadingMagicCard: PropTypes.func.isRequired,
};

export default MusicCard;
