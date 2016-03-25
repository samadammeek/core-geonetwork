/*
 * Copyright (C) 2001-2016 Food and Agriculture Organization of the
 * United Nations (FAO-UN), United Nations World Food Programme (WFP)
 * and United Nations Environment Programme (UNEP)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or (at
 * your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301, USA
 *
 * Contact: Jeroen Ticheler - FAO - Viale delle Terme di Caracalla 2,
 * Rome - Italy. email: geonetwork@osgeo.org
 */

(function() {
  goog.provide('gn_featurestable_directive');

  var module = angular.module('gn_featurestable_directive', []);

  module.directive('gnFeaturesTable', ['$http', 'gfiTemplateURL',
    function($http, gfiTemplateURL) {

      return {
        restrict: 'E',
        scope: {
          loader: '=?gnFeaturesTableLoader'
        },
        controllerAs: 'ctrl',
        bindToController: true,
        controller: 'gnFeaturesTableController',
        templateUrl: '../../catalog/components/viewer/gfi/partials/' +
          'featurestable.html',
        link: function (scope, element, attrs, controller) {
          controller.tableElt = element.find('table');
        }
      };
    }]);

  var GnFeaturesTableController = function($scope) {
    this.$scope = $scope;
    this.initTable();
  };

  GnFeaturesTableController.prototype.initTable = function() {

    this.loader.loadAll().then(function(features){
      this.features = features;
    }.bind(this));

/*
    this.tableElt.bootstrapTable('destroy');
    this.tableElt.bootstrapTable({
      columns: [{
        field: 'id',
        title: 'Item ID'
      }, {
        field: 'name',
        title: 'Item Name'
      }, {
        field: 'price',
        title: 'Item Price'
      }],
      data: [{
        id: 1,
        name: 'Item 1',
        price: '$1'
      }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
      }]
    });
*/

  };

  module.controller('gnFeaturesTableController', GnFeaturesTableController);

})();