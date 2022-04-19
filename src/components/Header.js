import React, { Component } from 'react';
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
      console.log(pegarGetuser);
      this.setState({
        status: false,
        name: pegarGetuser.name,
      });
    });
  }

  render() {
    const { status, name } = this.state;
    console.log(name.name);
    return (
      <section data-testid="header-component">
        <nav data-testid="header-user-name">
          {status ? <Carregando /> : <h1>{ name }</h1> }
        </nav>
      </section>
    );
  }
}
export default Header;
