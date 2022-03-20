'use strict';

import * as bf_2 from '../config/models/bf-2';
import * as ml_2 from '../config/models/ml-2';

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
  geonodeUrl: '',
  subUrl: '', // please don't use end trailing slash, example: /gep
  modelConfigs: {
    'bf-2': bf_2['default'],
    'ml-2': ml_2['default']
  }
};

