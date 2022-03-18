'use strict';

import * as bj_1 from '../config/models/bj-1';
import * as so_1 from '../config/models/so-1';

const COUNTRY = 'Global'
export default {
  appTitle: `${COUNTRY} Electrification Platform`,
  appShortTitle: `${COUNTRY[0]}EP`,
  appDescription:
    'Explore least cost electrification strategies around the world.',
  baseUrl: 'http://localhost:9000',
  dataServiceUrl: 'http://localhost:3000',
  mapboxAccessToken: 'pk.eyJ1IjoiZGVyaWxpbngiLCJhIjoiY2szeTlzbWo2MDV6eDNlcDMxM3dzZXBieiJ9.zPf1iiFilYYwyx6ETNj_8w',
  basemapStyleLink: 'mapbox://styles/derilinx/ck3yqjovg4dpn1crwajrc9ajr',

  country: COUNTRY,
  geonodeUrl: '',
  subUrl: '', // please don't use end trailing slash, example: /gep
  modelConfigs: {
    'bj-1': bj_1['default'],
    'so-1': so_1['default']
  }
};

