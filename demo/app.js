(function () {
  'use strict';
  function appController($scope, $mdDialog, tawkToService) {
    var vm = this;

    vm.visitor = {};
    vm.loaded = false;

    $scope.$on('TAWKTO:onLoad', function () {
      $scope.$apply(setVisitor);
      vm.loaded = true;
    });

    //YOUR TAWK.TO ID GOES HERE
    vm.id = null;

    vm.toggle = tawkToService.toggle;
    vm.toggleVisibility = tawkToService.toggleVisibility;

    function setVisitor() {
      vm.visitor = tawkToService.setVisitor('ngTawkTo Demo User', 'demo@demo.com');
    }

    if (!vm.id) {
      var prompt = $mdDialog.prompt()
        .title('What is your tawk.to ID?')
        .textContent('You can find your ID in your site settings in your tawk.to account.')
        .placeholder('tawk.to site ID')
        .ariaLabel('Site Id')
        .ok('Submit')
        .cancel('I don\'t have an ID, yet');

      $mdDialog.show(prompt)
        .then(function (result) {
          vm.id = result;
        }, function () {

        })
    }
  }

  appController.$inject = ['$scope', '$mdDialog', 'tawkToService'];

  angular.module('tawkToApp', ['ngMaterial', 'ngTawkTo'])
    .controller('appController', appController);
}());