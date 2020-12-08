import React, { createContext } from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { sliderActiveSelector } from 'models/common/selectors';

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  // const globalStateActive = useSelector(sliderActiveSelector);
  // const firstRenderOffset = React.useRef(false);

  const [active, setActive] = React.useState({
    active: 0,
    // globalStateActive !== 0 && globalStateActive ? globalStateActive : 0,
    onOffsetEnd: undefined,
  });

  // React.useEffect(() => {
  //   if (!firstRenderOffset.current) {
  //     if (globalStateActive !== 0 && active.onOffsetEnd !== undefined) {
  //       active.onOffsetEnd(globalStateActive);
  //     }
  //     firstRenderOffset.current = true;
  //   }
  // }, [globalStateActive, firstRenderOffset, active]);

  return (
    <Context.Provider value={{ state: active, dispatch: setActive }}>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
