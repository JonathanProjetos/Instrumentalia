import React, { Component } from 'react';
import { createUser } from '../services/userAPI';
import Carregando from '../components/Carregando';
import '../components/login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: '',
      buttonDisabled: true,
      login: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.validação();
    });
  }

  validação = () => {
    const { loginName } = this.state;
    const dois = 2;

    if (loginName.length > dois) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  handleClick = async () => {
    const { loginName } = this.state;
    this.setState({
      login: false,
    });
    await createUser({ name: loginName });
    this.setState({
      login: true,
    });
  }

  render() {
    const { loginName, login, buttonDisabled } = this.state;
    return (
      <div data-testid="page-login">
        { login ? (
          <form>
            <label htmlFor="name">
              <input
                name="loginName"
                value={ loginName }
                data-testid="login-name-input"
                type="text"
                onChange={ this.onInputChange }
              />
            </label>

            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ buttonDisabled }
              onClick={ this.handleClick }
            >
              Entrar
            </button>

          </form>)

          : <Carregando />}
      </div>
    );
  }
}

export default Login;
