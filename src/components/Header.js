import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      status: true,
    };
  }

  componentDidMount() {
    this.renderHeader();
  }

  renderHeader = () => {
    this.setState({
      status: true,
    }, async () => {
      const pegarGetuser = await getUser();
      this.setState({
        status: false,
        name: pegarGetuser.name,
      });
    });
  }

  render() {
    const { status, name } = this.state;
    return (
      <header data-testid="header-component">
        <nav>
          <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favoritos</Link>
          <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
        </nav>
        <nav data-testid="header-user-name">
          {status ? <Carregando /> : <h1>{name}</h1>}
        </nav>
      </header>
    );
  }
}
export default Header;
