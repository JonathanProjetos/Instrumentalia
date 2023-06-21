import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function ContextTheme({ children }) {
  const [theme, setTheme] = useState('light');

  const ThemeData = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  ContextTheme.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <Context.Provider value={ ThemeData }>
      {children}
    </Context.Provider>
  );
}

export default ContextTheme;