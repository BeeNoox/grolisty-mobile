angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ListsCtrl', function($scope) {
  $scope.list = [
    { id: 1, title: 'List 1', elements: [{ title: 'Ham', id: 1 }, { title: 'Spaghettis', id: 2 }, { title: 'Soda', id: 3 }, { title: 'Bacon', id: 4 }, { title: 'Fromage', id: 5 }] },
    { id: 2, title: 'List 2', elements: [{ title: 'Spaghettis', id: 1 }, { title: 'Full Cream', id: 3 }, { title: 'Sparkling water', id: 4 }] },
    { id: 3, title: 'List 3', elements: [{ title: 'Eggs', id: 1 }, { title: 'Bread', id: 2 }, { title: 'Full Cream', id: 3 }, { title: 'Bacon', id: 4 }, { title: 'Fromage', id: 5 }] },
    { id: 4, title: 'List 4', elements: [{ title: 'Salad', id: 1 }, { title: 'Maccaronis', id: 2 }, { title: 'Pickles', id: 3 }, { title: 'Beers', id: 4 }, { title: 'Sugar', id: 5 }, { title: 'Parmesan', id: 6 }] },
  ];
})

.controller('ListCtrl', function($scope, $stateParams) {
  $scope.item = { id: 4, title: 'List 4', elements: [{ title: 'Salad', id: 1 }, { title: 'Maccaronis', id: 2 }, { title: 'Pickles', id: 3 }, { title: 'Beers', id: 4 }, { title: 'Sugar', id: 5 }, { title: 'Parmesan', id: 6 }] };

  $scope.showDelete = false;
  $scope.showReorder = false;

  $scope.reorderItem = function(item, fromIndex, toIndex) {
    console.log('Reordering item ' + item + ' from ' + fromIndex + ' to ' + toIndex);
    //Move the item in the array
    $scope.item.elements.splice(fromIndex, 1);
    $scope.item.elements.splice(toIndex, 0, item);
  };

  $scope.onItemDelete = function(item) {
    console.log('Deleting item ' + item);
    $scope.item.elements.splice($scope.item.elements.indexOf(item), 1);
  };
});
