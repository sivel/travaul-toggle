(function() {
    var travaulToggle = angular.module('travaul-toggle', []);

    travaulToggle.directive('travaulToggle', function() {
        return {
            restrict: 'E',
            require: 'ngModel',
            replace: true,
            scope: {
                disabled: '=ngDisabled'
            },
            template: '<div class="switch"><a class="switch-icon" ng-class="{\'disabled\': disabled, \'active\': model}"><div class="switch-inner"><span class="on">ON</span><span class="off">OFF</span></div></a></div>',
            link: function(scope, element, attrs, ngModelCtrl) {
                element.on('click', function() {
                    scope.$apply(scope.toggle);
                });

                ngModelCtrl.$formatters.push(function(modelValue) {
                    return modelValue;
                });

                ngModelCtrl.$parsers.push(function(viewValue) {
                    return viewValue;
                });

                ngModelCtrl.$viewChangeListeners.push(function() {
                    scope.$eval(attrs.ngChange);
                });

                ngModelCtrl.$render = function() {
                    scope.model = ngModelCtrl.$viewValue;
                }

                scope.toggle = function toggle() {
                    if(!scope.disabled) {
                        scope.model = !scope.model;
                        ngModelCtrl.$setViewValue(scope.model);
                    }
                }
            }
        }
    });
})();
