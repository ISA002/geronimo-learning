import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  isTabletSelector,
  isDesktopSelector,
  isMediumDesktopSelector,
  isLargeDesktopSelector,
  viewportSelector,
} from 'models/common/selectors';

const viewport = WrappedComponent => {
  const HOC = props => <WrappedComponent {...props} />;

  const getDisplayName = WrappedComponentIn =>
    WrappedComponentIn.displayName || WrappedComponentIn.name || 'Component';

  HOC.displayName = `viewport(${getDisplayName(WrappedComponent)})`;

  return HOC;
};

const composedHoc = compose(
  connect(
    state => ({
      isTablet: isTabletSelector(state),
      isDesktop: isDesktopSelector(state),
      isMediumDesktop: isMediumDesktopSelector(state),
      isLargeDesktop: isLargeDesktopSelector(state),
      viewport: viewportSelector(state),
    }),
    null,
    null,
    { pure: false }
  ),
  viewport
);

export default composedHoc;
