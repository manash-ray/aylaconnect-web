(function () {
    'use strict';
    angular
        .module('app')
        .controller('ViewAlertsController', ViewAlertsController);

    ViewAlertsController.$inject = ['$location','FlashService','$scope','$rootScope','$routeParams','CommonService', 'toastr', '$interval', 'NgMap', 'Socialshare', 'ngMeta'];
    function ViewAlertsController($location,FlashService,$scope,$rootScope,$routeParams,CommonService, toastr, $interval, NgMap, Socialshare, ngMeta) {
       
    	var alertsController = this;
    	
    	alertsController.alerts = [];
    	
    	 alertsController.vi = {};
    	
    	 $scope.Timer = null;
    	 
    
    	 
        (function initController() {
          
     	
        	if($location.path() == '/viewalert'){
	        	var ind = $location.search().p;
	    		var rul = $location.search().r;
	    		if(rul){
	    			alertsController.alerts =  $rootScope.globalsalertsmap[String(rul)];
	    			alertsController.vi =  alertsController.alerts[Number(ind)];
	    			CommonService.postData(true,'sweb/alertsRest/loadVi', alertsController.vi).then(function(response){
	                	alertsController.vi = response;
	    			});
	    		}
	    		
        	}
        	
 

          	})();

        
        $scope.StartTimer = function () {
           
            //Initialize the Timer to run every 1000 milliseconds i.e. one second.
            $scope.Timer = $interval(function () {
            	CommonService.postData(true,'sweb/alertsRest/loadVi', alertsController.vi).then(function(response){
            	alertsController.vi = response;
            	
            	});
            }, 10000);
        };
       
      
 
                
    }})();



