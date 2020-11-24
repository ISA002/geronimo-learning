import Home from 'pages/Home';
import FilmPage from 'pages/FilmPage';
import PubPage from 'pages/PubPage';
import FramerSliderPage from 'pages/FramerSliderPage';

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
    path: '/slider',
    exact: true,
    cache: false,
    component: FramerSliderPage,
    sagasToRun: [],
    title: 'slider',
  },
];
