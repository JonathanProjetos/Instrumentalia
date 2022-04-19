import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
       {/*  <Link to="/favorites">Musica</Link>
        <Link to="/profile">Perfil</Link> */}
      </div>
    );
  }
}
export default Search;
