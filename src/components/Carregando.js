import React, { Component } from 'react';
import PropTypes from 'prop-types';
import carregando3 from '../Style/carregando3.gif';

class Carregando extends Component {
  render() {
    const { disable } = this.props;

    if (disable) return null;

    return (
      <div>
        <img src={ carregando3 } alt="carregando" />
      </div>
    );
  }
}

Carregando.propTypes = {
  disable: PropTypes.bool.isRequired,
};

export default Carregando;
