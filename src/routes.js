import Home from 'pages/Home';

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
];
