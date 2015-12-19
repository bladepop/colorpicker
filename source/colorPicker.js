angular.module('tb-color-picker', [])
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('color-picker.tpl.html', '<div class="color-picker">'+
            '<div class="selected-color" ng-style="{\'background-color\': vm.color}"></div>' +
            '<div class="color-palette">'+
                '<div ng-repeat="option in vm.options"'+
                'ng-style="{\'background-color\': option}"'+
                'ng-class="{\'palette-selected-color\': option == vm.color, \'transparent-color\': option == \'transparent\'}"'+
                'ng-click="vm.changeColor(option)"></div>'+
            '</div>'+
        '</div>');
    }])
    .directive('colorPicker', function () {
        return {
            restrict: 'E',
            templateUrl: 'color-picker.tpl.html',
            replace: true,
            controller: colorPickerDirectiveController,
            controllerAs: 'vm',
            bindToController: {
                color: '=',
                options: '=',
                onColorChanged: '&'
            }
        };

        function colorPickerDirectiveController() {
            var vm = this;
            
            vm.changeColor = function (option) {
                if(vm.color != option) {
                    var old = vm.color;
                    vm.color = option;
                    vm.onColorChanged({newColor: option, oldColor: old});
                }
            }

        }
    });