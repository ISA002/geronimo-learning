import Home from 'pages/Home';
import FilmPage from 'pages/FilmPage';

import PubPage from 'pages/PubPage';
import PubDetail from 'pages/PubDetail';

import FramerSliderPage from 'pages/FramerSliderPage';
import FilmDetail from 'pages/FilmDetail';

// import { fetchUsers, fetchUser } from 'models/users/sagas';

export default [
  {
    path: '/',
    exact: true,
    cache: false,
    component: Home,
    sagasToRun: [],
    title: 'Home',
  },
  {
    path: '/film',
    exact: true,
    cache: false,
    component: FilmPage,
    sagasToRun: [],
    title: 'film',
  },
  {
    path: '/pub',
    exact: true,
    cache: false,
    component: PubPage,
    sagasToRun: [],
    title: 'pub',
  },
  {
    path: '/pub',
    exact: true,
    cache: false,
    component: PubDetail,
    sagasToRun: [],
    title: 'pub-info',
  },
  {
    path: '/tv',
    exact: true,
    cache: false,
    component: FramerSliderPage,
    sagasToRun: [],
    title: 'tv',
  },
  {
    path: '/tv/:id',
    exact: true,
    cache: false,
    component: FilmDetail,
    sagasToRun: [],
    title: 'tv-info',
  },
];
