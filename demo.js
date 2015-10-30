(function() {
    ngApp = angular.module('ngApp', ['travaul-toggle']);

    ngApp.controller('mainController', [
        '$scope',
        function($scope) {
            $scope.toggles = [
                {
                    value: true,
                    disabled: false
                },
                {
                    value: true,
                    disabled: true,
                },
                {
                    value: false,
                    disabled: false
                },
                {
                    value: false,
                    disabled: true
                }
            ];
        }
    ]);
})();
