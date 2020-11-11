import React from 'react';
import { PageLoadContext } from './PageWrapper';

const PageVisibleHoc = WrappedComponent => {
  const HOC = props => (
    <PageLoadContext.Consumer>
      {context => <WrappedComponent {...props} {...context} />}
    </PageLoadContext.Consumer>
  );

  const getDisplayName = WrappedComponentIn =>
    WrappedComponentIn.displayName || WrappedComponentIn.name || 'Component';

  HOC.displayName = `PageVisibleHoc(${getDisplayName(WrappedComponent)})`;

  return HOC;
};

export default PageVisibleHoc;
