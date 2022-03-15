'use strict';
const COUNTRY = 'Global';
export default {
    environment: 'production',
    appTitle: `${COUNTRY} Electrification Platform`,
    appShortTitle: `${COUNTRY[0]}EP`,
    appDescription: 'Explore least cost electrification strategies around the world.',
    baseUrl: 'http://127.0.0.1:9000',
    country: COUNTRY,
    dataServiceUrl: 'http://127.0.0.1:3000',
    mapboxAccessToken: 'pk.eyJ1IjoiZGVyaWxpbngiLCJhIjoiY2szeTlzbWo2MDV6eDNlcDMxM3dzZXBieiJ9.zPf1iiFilYYwyx6ETNj_8w',
    basemapStyleLink: 'mapbox://styles/derilinx/ck3yqjovg4dpn1crwajrc9ajr',
    subUrl: '', // please don't use end trailing slash, example: /gep
    geonodeUrl: '/',

    // this for cluster layer
    clusterSourceName: 'cluster_somalia',
    clusterLayerUrl: 'https://maps.kartoza.com/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=somalia:cluster_somalia&TILEMATRIX=EPSG:3857:{z}&TILEMATRIXSET=EPSG:3857&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'
};

