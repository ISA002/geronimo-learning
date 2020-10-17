import Home from 'pages/Home';
import FilmPage from 'pages/FilmPage';

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
];
