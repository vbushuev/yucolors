(function(){
  var app=angular.module('yucolorsFactories',[]);
  app.factory('UserFactory',function(){
    var UserFactory={};
    function closer(){return "creative<sub>A</sub>";}
    UserFactory.sayCompany=function(){
      return closer();
    }
    return UserFactory;
  });
})();
