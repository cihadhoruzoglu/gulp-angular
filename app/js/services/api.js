
angular.module('gulpApp.rest', [])
    .factory("api", function($http) {
        var apiUrl          = 'https://api.foursquare.com/v2/',
            clientId        = 'Y4CWC5KQZALA0U5UWRX44C2I5ZXJDXZZIOPSENLNUYNU4YHK',
            clientSecret    = 'C3MEUFC0BY1KIEYRZTFAS1CA1OHBIOQ0Z22KC1E4GU435QZW',
            v               = '20140815';

        return {
            searchVenue: function(searchText) {
                var promise =  $http({
                    url: apiUrl + 'venues/search?',
                    method: "GET",
                    params: {
                        client_id: clientId,
                        client_secret: clientSecret,
                        v: v,
                        near: 'Istanbul,tr',
                        query: searchText
                    }
                });

                return promise;
            },
            getVenue: function(venueId, success) {
                $http({
                    url: apiUrl + 'venues/' + venueId,
                    method: "GET",
                    params: {
                        client_id: clientId,
                        client_secret: clientSecret,
                        v: v
                    }
                })
                    .success(function(data) {
                        success(data);
                    });
            }
        }
    });