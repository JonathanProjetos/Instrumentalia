import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Carregando extends Component {
  render() {
    const { disable } = this.props;

    if (disable) return null;

    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }
}

Carregando.propTypes = {
  disable: PropTypes.bool.isRequired,
};

export default Carregando;
