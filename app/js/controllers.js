(function(){
  var app=angular.module('yucolorsControllers',[
    'yucolorsServices',
    'yucolorsFactories'
  ]);
  app.controller('ShopManagerController',function($scope,UserService,UserFactory){
    var t=this;
  });
  app.controller('NavController',function(){
    var vm=this;
    vm.timeNow=new Date();
  });
  app.controller('TestController',function(){
    var vm=this;
  });
})();
