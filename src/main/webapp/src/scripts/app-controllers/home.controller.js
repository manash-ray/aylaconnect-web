(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location','FlashService','$scope','$rootScope','$routeParams','$cookieStore','$route','CommonService'];
    function HomeController($location,FlashService,$scope,$rootScope,$routeParams,$cookieStore,$route,CommonService) {
    	var homeController = this;
    	
    	
    	   
        if($rootScope.globals.currentUser!=undefined){
        	homeController.userId=  $rootScope.globals.currentUser.id;
     	   
        }
        else{
        	homeController.userId=-1;
     	   
     	   
        }
    	
          
        
    }
    
})();


