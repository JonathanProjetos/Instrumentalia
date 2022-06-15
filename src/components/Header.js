import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';
import { StyleNavLink, StyleName } from '../Style/Header';

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
      const pegarGetUser = await getUser();
      this.setState({
        status: false,
        name: pegarGetUser.name,
      });
    });
  }

  render() {
    const { status, name } = this.state;
    return (
      <header data-testid="header-component">
        <StyleNavLink>
          <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favoritos</Link>
          <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
        </StyleNavLink>
        <StyleName data-testid="header-user-name">
          {status ? <h1>Carregando...</h1> : <h1>{`Olá ${name}!`}</h1>}
        </StyleName>
      </header>
    );
  }
}
export default Header;
