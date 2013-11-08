// configuration module
define({
	database: 'dbRecorridos',
    cgiUrl: './api/',
    vectorLayerUrl: './api/',
    initCenter: {
        lon: -64.1857371,
        lat: -31.4128832,
        zoom: 12},
    ui: {
        mapDiv: 'map',
        routesDiv: 'routes',
        tripsDiv: 'trips',
        stopAttr: '#stopAttr',
        stopList: '#stopList',
        tracksDiv: 'tracksSelect',
        scheduleDiv: 'schedule',
        layersDiv: 'capas'
    },
    localOsm: false
})

// config = {
//     div: 'map',
//     vectorLayerUrl: {},
//     strokeColor: 'blue',
//     localOsm: false
// }