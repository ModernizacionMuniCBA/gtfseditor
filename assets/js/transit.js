require.config({
	baseUrl: 'assets/js/lib',
    shim: {
        OpenLayers: {
            exports: 'OpenLayers'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },
    paths: {
        transit: '../transit'
    }
});

require(["transit/maps",
        "transit/ui", 
        "transit/config"], function (maps, ui, config) {
    'use strict';

    maps.init({
            layers:['bbox','notes','routes','gpx','stops'],
            controls: 'editor'
        })
        .setCenter(config.initCenter);
    
    ui.init({controls: 'editor'});


});
