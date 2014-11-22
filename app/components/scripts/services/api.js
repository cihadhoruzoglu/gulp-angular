
angular.module('gulpApp.rest', [])
    .factory("api", function($q, $timeout) {

        return {
            getPersons: function() {
                var deferred = $q.defer();

                var persons = [
                    {
                        Name: "Cihad",
                        Surname: "Horuzoglu"
                    },
                    {
                        Name: "Ayse",
                        Surname: "Gumus"
                    },
                    {
                        Name: "Erdi",
                        Surname: "Acar"
                    },
                    {
                        Name: "Azra",
                        Surname: "Bolat"
                    },
                    {
                        Name: "Mustafa",
                        Surname: "Gur"
                    },
                    {
                        Name: "Mahir",
                        Surname: "Calisir"
                    },
                    {
                        Name: "Onuralp",
                        Surname: "Taner"
                    }
                ];

                $timeout(function() {
                    deferred.resolve(persons);
                }, 500);

                return deferred.promise;
            }
        }
    });