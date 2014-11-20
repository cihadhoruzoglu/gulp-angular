
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
                        Name: "Erdi",
                        Surname: "Acar"
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
                        Name: "Onur Alp",
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