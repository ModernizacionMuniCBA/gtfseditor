define([
  "OpenLayers",
  "backbone",
  "transit/views/mapStyles"
  ],
  function (OpenLayers, Backbone, Styles) {
    'use strict';

    var View;

    View = Backbone.View.extend({

        initialize: function (options) {
            var self = this;
            this.map = options.map;

            this.layer = new OpenLayers.Layer.Vector("KML", {
                strategies: [new OpenLayers.Strategy.Fixed()],
                projection: new OpenLayers.Projection('EPSG:4326'),
                styleMap: Styles.kmlStyleMap,
                protocol: new OpenLayers.Protocol.HTTP({
                    url: "kml/3.kml",
                    format: new OpenLayers.Format.KML({
                        // extractStyles: true, 
                        extractAttributes: true,
                        maxDepth: 2
                    })
                })
            });
            this.layer.id = 'kml_layer';
            
            this.map.addLayer(self.layer);
        }

    });

    return View;
});