import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper, { PageLoadContext } from 'components/PageWrapper';
import Curtain from 'components/Curtain';
import classnames from 'classnames';
import style from './Wrapper.scss';
import { useSelector } from 'react-redux';
import { changeAnimationSelector } from 'models/common/selectors';

const Wrapper = ({ isVisiblePage, title, children }) => {
  const isUnstandartAnimation = useSelector(changeAnimationSelector);

  return (
    <>
      <PageWrapper title={title} isVisiblePage={isVisiblePage}>
        <PageLoadContext.Consumer>
          {({ isAnimatedLoad }) =>
            React.cloneElement(children, { isLoaded: isAnimatedLoad })
          }
        </PageLoadContext.Consumer>
      </PageWrapper>
      {!isUnstandartAnimation && (
        <Curtain
          className={classnames(style.curtain, 'route-exit')}
          curtainClassName={style.curtainColumn}
          amount={3}
          isLoading={isVisiblePage}
          duration={{ in: 0, out: 700 }}
          delayCurtain={{ in: 1000, out: 300 }}
          animation="slideInUpCurtain"
        />
      )}
    </>
  );
};

Wrapper.propTypes = {
  isVisiblePage: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(Wrapper);
