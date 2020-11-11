import image1 from 'images/version_case_image1.jpg';
import image2 from 'images/version_case_image2.jpg';
import image3 from 'images/version_case_image3.jpg';

export const homePageData = [
  { id: 0, title: 'TV', image: image1 },
  { id: 1, title: 'FILM', image: image2 },
  { id: 2, title: 'PUB', image: image3 },
];

export const headerMenuData = [
  { id: 0, title: 'Pub', to: '/pub' },
  { id: 1, title: 'Film', to: '/film' },
  { id: 2, title: 'Home', to: '/' },
];

export const LARGE_DESKTOP = 'LARGE_DESKTOP';
export const MEDIUM_DESKTOP = 'FULL_HD_DESKTOP';
export const DESKTOP = 'DESKTOP';
export const TABLET = 'TABLET';
export const MOBILE = 'MOBILE';

export const TABLET_MEDIA_QUERY = '(max-width: 1024px)';
export const DESKTOP_MEDIA_QUERY =
  '(max-width: 1440px) and (min-width: 1024px)';
export const MEDIUM_DESKTOP_MEDIA_QUERY =
  '(max-width: 1920px) and (min-width: 1440px)';

export const PAGE_TRANSITION = 1500;
