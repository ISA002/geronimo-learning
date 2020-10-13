import Req from './request';

import info from 'stubs/info';

export const getInfo = () =>
  Req.GET({
    url: '/info',
    stubData: info,
  });
