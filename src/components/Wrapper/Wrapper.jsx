import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper, { PageLoadContext } from 'components/PageWrapper';

const Wrapper = ({ isVisiblePage, title, children }) => {
  console.log(isVisiblePage);
  return (
    <PageWrapper title={title} isVisiblePage={isVisiblePage}>
      <PageLoadContext.Consumer>
        {({ isAnimatedLoad }) =>
          React.cloneElement(children, { isLoaded: isAnimatedLoad })
        }
      </PageLoadContext.Consumer>
    </PageWrapper>
  );
};

Wrapper.propTypes = {
  isVisiblePage: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Wrapper;
