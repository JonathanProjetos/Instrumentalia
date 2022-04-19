import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <p>Edição De Perfil</p>
        {/* <Link to="/profile">Perfil</Link>
        <Link to="/search">Volta para busca</Link>
        <Link to="/favorites">Volta para musicas</Link> */}
      </div>
    );
  }
}
export default ProfileEdit;
