'use strict';

angular.module('loc8rApp', []);

var locationListCtrl = function ($scope) {
  $scope.data = {
    locations: [{
      name: 'Starbucks',
      address: 'Illini Union (Courtyard Cafe)',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '0.2947493',
      _id: '53729234a8822893uha09uf0'
    }, {
      name: 'Espresso Royale',
      address: 'Sixth and Daniel',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '0.6739294',
      _id: '53729234a8822893uha09uf1'
    }, {
      name: 'Dunkin Donuts',
      address: 'Sixth and Green',
      rating: 2,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '0.83728021',
      _id: '53729234a8822893uha09uf2'
    }, {
      name: 'Murphy\'s Pub',
      address: 'Sixth and Green',
      rating: 3,
      facilities: ['Food', 'Premium wifi'],
      distance: '0.8294817',
      _id: '53729234a8822893uha09uf3'
    }]
  }
};

angular
  .module('loc8rApp')
  .controller('locationListCtrl', locationListCtrl);
