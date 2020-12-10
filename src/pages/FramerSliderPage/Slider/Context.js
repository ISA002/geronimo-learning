import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [sliderContextState, setSliderContextState] = React.useState({
    onOffsetEnd: undefined,
  });

  return (
    <Context.Provider
      value={{ state: sliderContextState, setState: setSliderContextState }}
    >
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
