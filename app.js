(function () { 
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);
    
    MsgController.$inject = ["$scope"];
    function MsgController($scope) { 
        $scope.items = [];
        $scope.message = '';
        $scope.classChecker = null;
        $scope.whiteSpaceChecker = false;

        $scope.getItems = function() {
            if (!$scope.items || !$scope.items.length) {
                $scope.message = 'Please enter data first.';
                $scope.checker = false;
            } else {
                var messageTotal = $scope.items.split(',');
                $scope.checker = true;
                    if (messageTotal.length > 3) {
                        $scope.message = 'Too much!';
                    } else {
                        $scope.message = 'Enjoy';
                    }
            }
        }
    };
})();