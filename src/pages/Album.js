import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <p>Album</p>
        {/* <Link to="/search">Volta para busca</Link>
        <Link to="/favorites">Volta para musicas</Link>
        <Link to="/profile">Volta para profile</Link> */}
      </div>
    );
  }
}
export default Album;
