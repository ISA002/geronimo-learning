import React from 'react';

export default ({ config, children }) => {
  const [sliderState, setSliderState] = React.useState({
    prev: children.length - 1,
    active: 0,
    next: 1,
  });

  if (config.stateConfig !== undefined) {
    return [config.stateConfig.state, config.stateConfig.setState];
  }
  return [sliderState, setSliderState];
};
