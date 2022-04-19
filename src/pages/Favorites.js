import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <p>Favoritos</p>
      {/*   <Link to="/search">Volta para busca</Link>
        <Link to="/profile">Volta para profile</Link> */}
      </div>
    );
  }
}
export default Favorites;
