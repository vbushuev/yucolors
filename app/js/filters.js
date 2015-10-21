(function(){
  var app=angular.module('yucolorsFilters',[]);
  app.filter('UserFilter',function(item){
    return function(item){return item.toUpperCase();};
  });
})();
