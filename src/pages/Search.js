import React, { Component } from 'react';
import Header from '../components/Header';
import Carregando from '../components/Carregando';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      nomeArtista: '',
      btnValidate: true,
      loading: false,
    };
  }

  handleChange= ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.validateBtn();
    });
  }

  handleClick=() => {

  }

  validateBtn=() => {
    const { nomeArtista } = this.state;
    const One = 1;

    if (nomeArtista.length > One) {
      this.setState({
        btnValidate: false,
      });
    } else {
      this.setState({
        btnValidate: true,
      });
    }
  };

  render() {
    const { nomeArtista, btnValidate, loading } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />

        {loading ? <Carregando /> : (

          <form>
            <input
              name="nomeArtista"
              type="text"
              data-testid="search-artist-input"
              onChange={ this.handleChange }
            />

            <button
              type="button"
              data-testid="search-artist-button"
              onClick={ this.handleClick }
              disabled={ btnValidate }
            >
              Pesquisar
            </button>
          </form>
        )}
      </div>
    );
  }
}
export default Search;
