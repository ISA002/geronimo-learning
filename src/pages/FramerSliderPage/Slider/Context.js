import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [active, setActive] = React.useState({
    active: 0,
  });

  return (
    <Context.Provider value={{ state: active, dispatch: setActive }}>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
