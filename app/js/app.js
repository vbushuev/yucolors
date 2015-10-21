(function() {
  var app=angular.module('yucolors',['ngRoute','ngResource']);
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider
      .when('/shop-manager',{
        templateUrl:'views/shop-manager.html',
        controller:'ShopManagerController',
        controllerAs:'manager'
      })
      .otherwise({redirectTo:'/shop-manager'});
  }]);
})();
