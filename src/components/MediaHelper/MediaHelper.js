/* eslint-disable */
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';

import { actions } from 'models/common/slice';
import browserHoc from 'hocs/browser';

import delay from 'lodash/delay';

import createAction from 'utils/createAction';

import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
  DESKTOP,
  TABLET,
  MOBILE,
} from 'constants';

const getViewport = (mediaMobile, mediaTablet) => {
  if (mediaMobile.matches) {
    return MOBILE;
  } else if (mediaTablet.matches) {
    return TABLET;
  }
  return DESKTOP;
};

const onCheckViewport = () => {
  const mediaQueryMobile = window.matchMedia(MOBILE_MEDIA_QUERY);
  const mediaQueryTablet = window.matchMedia(TABLET_MEDIA_QUERY);

  return getViewport(mediaQueryMobile, mediaQueryTablet);
};

@browserHoc
@connect(
  null,
  { onSwitchViewport: createAction(actions.setViewport) }
)
class MediaHelper extends PureComponent {
  constructor(props) {
    super(props);

    this.viewport = '';
    this.debounceResize = debounce(this.handleResize, 300);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('resize', this.debounceResize);

    window.addEventListener('orientationchange', () => {
      delay(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    });

    document.addEventListener('gesturestart', e => {
      e.preventDefault();
    });

    this.handleResize();

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    this.onSetGlobalStyle();
  }

  onSetGlobalStyle = () => {
    const {
      browser: { platform, os, name },
    } = this.props;
    if (platform === 'desktop') {
      document.body.classList.add('noDevice');
    }

    document.body.classList.add(`${os}`);
    document.body.classList.add(`${name.replace(/\s/g, '')}`);
  };

  onSetVhSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('resize', this.debounceResize);
  }

  handleResize = () => {
    const { onSwitchViewport } = this.props;
    const currentViewport = onCheckViewport();
    requestAnimationFrame(this.onSetVhSize);

    if (currentViewport !== this.viewport) {
      onSwitchViewport(currentViewport);
    }
  };

  render() {
    return null;
  }
}

export default MediaHelper;
