/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

// import { Helmet } from 'react-helmet-async';

import viewportHoc from 'hocs/viewport';
import { PAGE_TRANSITION } from 'constants';

import styles from './PageWrapper.scss';

// import socialImage from 'images/social_Image.jpg';

export const PageLoadContext = React.createContext();

@viewportHoc
@connect(() => ({ isLoadedContent: true }))
class PageWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    const { isLoadedContent } = props;

    this.state = { isAnimatedLoad: false, isLoadedContent };
    this.isMountloadContent = isLoadedContent;
    this.root = React.createRef();
  }

  componentDidMount() {
    const { isVisiblePage } = this.props;

    if (isVisiblePage && this.isMountloadContent) {
      this.timerMount = setTimeout(() => {
        this.setState({ isAnimatedLoad: true });
      }, PAGE_TRANSITION * 0.4);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line
    const { isLoadedContent, isVisiblePage } = this.props;

    const {
      isLoadedContent: nextIsLoadedContent,
      isVisiblePage: nextIsVisiblePage,
    } = nextProps;

    if (!this.isMountloadContent) {
      if (isLoadedContent !== nextIsLoadedContent && nextIsLoadedContent) {
        this.isMountloadContent = nextIsLoadedContent;
        this.setState({ isAnimatedLoad: true });
      }
      return;
    }

    if (isVisiblePage !== nextIsVisiblePage) {
      if (nextIsVisiblePage) {
        this.timerUpdate = setTimeout(() => {
          this.setState({ isAnimatedLoad: true });
        }, PAGE_TRANSITION);
        return;
      }

      this.setState({ isAnimatedLoad: false });
    }
  }

  componentWillUnmount() {
    if (this.timerUpdate) clearTimeout(this.timerUpdate);
    if (this.timerMount) clearTimeout(this.timerMount);
  }

  render() {
    const { children, className } = this.props;

    return (
      <React.Fragment>
        {/* {RUNTIME_ENV === 'client' && <Helmet title={title} />} */}
        <div
          id="pageWrapper"
          className={classnames(styles.root, className)}
          ref={this.root}
        >
          <PageLoadContext.Provider value={this.state}>
            {children}
          </PageLoadContext.Provider>
        </div>
      </React.Fragment>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.any,
  isDesktop: PropTypes.bool,
  isLoadedContent: PropTypes.bool,
  isVisiblePage: PropTypes.bool,
  className: PropTypes.string,
};

export default PageWrapper;
