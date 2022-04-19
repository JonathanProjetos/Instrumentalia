import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <p>Perfil</p>
        {/* <Link to="/search">Volta para busca</Link>
        <Link to="/favorites">Volta para musicas</Link>
        <Link to="/profile/edit">Edição de perfil</Link> */}
      </div>
    );
  }
}
export default Profile;
