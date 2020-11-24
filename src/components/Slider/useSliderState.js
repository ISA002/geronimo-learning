import React from 'react';

export default ({ config }) => {
  const [sliderState, setSliderState] = React.useState({
    active: 0,
  });

  if (config.stateConfig !== undefined) {
    return [config.stateConfig.state, config.stateConfig.setState];
  }
  return [sliderState, setSliderState];
};
