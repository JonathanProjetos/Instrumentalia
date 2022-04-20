import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Carregando from '../components/Carregando';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      nomeArtista: '',
      albuns: '',
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

  handleClick= async () => {
    const { nomeArtista } = this.state;
    this.setState({
      loading: true,
    });
    const retornoApi = await searchAlbumsAPI(nomeArtista);

    this.setState({
      loading: false,
      albuns: retornoApi,
    });
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
    const { btnValidate, loading, albuns, nomeArtista } = this.state;

    return (
      <section className="form-login-container">
        <div data-testid="page-search">
          <Header />
          <h1>{`Resultado de álbuns de: ${nomeArtista}`}</h1>
          {loading ? <Carregando /> : (

            <form>
              <input
                name="nomeArtista"
                type="text"
                data-testid="search-artist-input"
                onChange={ this.handleChange }
              />

              <button
                type="submit"
                data-testid="search-artist-button"
                onClick={ this.handleClick }
                disabled={ btnValidate }
              >
                Pesquisar
              </button>
            </form>
          )}
        </div>
        {albuns.length === 0 ? <p>Nenhum álbum foi encontrado</p> : (
          albuns.map((elm) => (
            <div key={ elm.artistId }>
              <div>
                <p>{ elm.artistName }</p>
                <img src={ elm.artworkUrl100 } alt="foto da banda" />
                <p>{ elm.collectionName }</p>
              </div>
              <Link
                data-testid={ `link-to-album-${elm.artistId}` }
                to="/album/:id"
              >
                collectionId

              </Link>
            </div>
          ))
        )}
      </section>
    );
  }
}
export default Search;
