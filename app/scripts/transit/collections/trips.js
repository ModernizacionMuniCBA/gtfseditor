define([
    "underscore",
    "backbone",
    "transit/models/trip"
], function (_, Backbone, TripModel) {
    var TripsCollection;

    TripsCollection = Backbone.Collection.extend({
        model: TripModel,
        
        route_id: '',

        url: function() {
            return 'api/route/' + this.route_id + '/trips';
        },

        initialize: function(){

        },

        parse: function (response) {
            return response.trips;
        },

        select: function (trip_id) {
            var self = this;

            var selectedModel = _.find(self.models, function (model) {
                return model.get("trip_id") == trip_id;
            });

            this.selected = selectedModel;

            self.trigger('trip_selected', selectedModel);
        }
    });

    return TripsCollection;
})