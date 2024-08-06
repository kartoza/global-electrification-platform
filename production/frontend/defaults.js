'use strict';

import * as example from '../config/models/example';

const COUNTRY = 'Global'
export default {
  appTitle: `${COUNTRY} Electrification Platform`,
  appShortTitle: `${COUNTRY[0]}EP`,
  appDescription:
    'Explore least cost electrification strategies around the world.',
  baseUrl: 'http://localhost:9000',
  dataServiceUrl: '/gep-server',
  mapboxAccessToken: 'pk.eyJ1IjoiZGVyaWxpbngiLCJhIjoiY2szeTlzbWo2MDV6eDNlcDMxM3dzZXBieiJ9.zPf1iiFilYYwyx6ETNj_8w',
  basemapStyleLink: 'mapbox://styles/derilinx/ck3yqjovg4dpn1crwajrc9ajr',

  country: COUNTRY,
  geonodeUrl: 'http://127.0.0.1:80',
  subUrl: '', // please don't use end trailing slash, example: /gep
  modelConfigs: {
    'example': example['default']
  }
};

