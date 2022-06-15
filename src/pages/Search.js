/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Carregando from '../components/Carregando';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import {
  StyleSearch,
  StyleSearchDiv,
  StyleMenssager,
  StyleDivInput,
  StyleSearch2,
} from '../Style/Search';

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

          {loading ? <Carregando /> : (
            <StyleSearch2>
              <StyleDivInput>
                <input
                  name="nomeArtista"
                  type="text"
                  data-testid="search-artist-input"
                  onChange={ this.handleChange }
                  placeholder="Pesquise uma Música"
                />
                <button
                  type="submit"
                  data-testid="search-artist-button"
                  onClick={ this.handleClick }
                  disabled={ btnValidate }
                >
                  Pesquisar
                </button>
              </StyleDivInput>
              <div>
                <h1>{`Resultado da pesquisa: ${nomeArtista}`}</h1>
              </div>
            </StyleSearch2>
          )}
        </div>
        <StyleSearch>
          {albuns.length === 0 ? <StyleMenssager>
            Nenhum álbum foi encontrado
          </StyleMenssager>
            : (

              albuns.map((elm) => (
                <StyleSearchDiv key={ elm.collectionId }>
                  <div>
                    <h1>{ elm.artistName }</h1>
                    <img src={ elm.artworkUrl100 } alt="foto da banda" />
                    <p>{ elm.collectionName }</p>
                    <p>{ elm.collectionPrice }</p>
                    <p>{ elm.releaseDate }</p>
                  </div>
                  <Link
                    data-testid={ `link-to-album-${elm.collectionId}` }
                    to={ `/album/${elm.collectionId}` }
                  >
                    collection

                  </Link>
                </StyleSearchDiv>
              ))
            )}
        </StyleSearch>
      </section>
    );
  }
}
export default Search;
