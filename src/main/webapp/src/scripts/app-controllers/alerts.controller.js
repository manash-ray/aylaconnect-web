(function () {
    'use strict';
    angular
        .module('app')
        .controller('AlertsController', AlertsController);

    AlertsController.$inject = ['$location','FlashService','$scope','$rootScope','$routeParams','CommonService', 'toastr', '$interval', 'NgMap', 'Socialshare', 'ngMeta'];
    function AlertsController($location,FlashService,$scope,$rootScope,$routeParams,CommonService, toastr, $interval, NgMap, Socialshare, ngMeta) {
       
    	var alertsController = this;
    	alertsController.viewAlert = viewAlert;   
    	alertsController.addAlert = addAlert;
    	alertsController.alertsmap = {};
    	alertsController.alerts = [];
    	alertsController.newalert = {};
    	 $scope.properties = [];
    	 $scope.selctedrule = '';
    	 $scope.rules = [];
    	 $scope.symbols = [];
    	 $scope.models = [];
    	 $scope.types = [];
    	 alertsController.setalerts = [];
    	 alertsController.vi = {};
    	 alertsController.loadstate = loadstate;
    	 alertsController.load = load;
    	 $scope.changealert = '';
    	 $scope.Timer = null;
    	 
    	 $scope.multipleRoles = [];
    	 
        (function initController() {
          
     	
        	        	
    		if($location.path() == '/alerts'){
        
	        	
	        	CommonService.postData(true,'sweb/alertsRest/getAssignedAlerts/'+ -1+'/'+0, {}).then(function(response){
	  
	        		alertsController.alertsmap=response;
	        		$rootScope.globalsalertsmap = response;
	        		
	        	     $.each(alertsController.alertsmap, function(key, value) {        	               
	        	    	 $scope.rules.push(key);        	        
	        	     });
	        	      if($scope.rules.length > 0) { 
	        	    	  $scope.selctedrule = 	$scope.rules[0];
	        	    	  alertsController.alerts = alertsController.alertsmap[$scope.selctedrule];
	        	      }
	        		
	            	
	        	});
        	
        	
    		}
    		
    		if ($location.path() == '/alertsettings'){
        		
        		CommonService.postData(true,'sweb/alertsRest/getSetAlerts', {}).then(function(response){
     			   
                	alertsController.setalerts = response;
                	
                	});
    		}
        	
    		if ($location.path() == '/newalert'){
        	
	        	$scope.properties.push("WiFi_Signal_Strength"); 
	        	$scope.properties.push("Power_On"); 
	        	$scope.properties.push("Grill_Temp");
	        	$scope.properties.push("Probe_Temp");
	        	$scope.properties.push("Smoke_On");
	        	$scope.properties.push("Stand_By_Mode");
	        	$scope.properties.push("Pre_Heat_Mode");
	        	$scope.properties.push("Gas_Level");
	        	
	        	$scope.models.push("AC2700-BBQ");
	
	        	
	        	$scope.symbols.push(">");
	        	$scope.symbols.push(">=");
	        	$scope.symbols.push("<");
	        	$scope.symbols.push("<=");
	        	$scope.symbols.push("=");
	        	$scope.symbols.push("!=");
	        	
	        	
	        	 $scope.types.push("Error");
	        	 $scope.types.push("Replenishment");
	        	 $scope.types.push("Warning");
	        	 
      
    		}
    		
        		

          	})();

        

        
        function load(){
        	alertsController.alerts = alertsController.alertsmap[$scope.selctedrule];
        }
        
        function loadstate(){
        	if(alertsController.newalert.type == 'Error'){
        		alertsController.newalert.state = 'red';
        	}else if(alertsController.newalert.type == 'Warning'){
        		alertsController.newalert.state = 'yellow';
        	}else{
        		alertsController.newalert.state = 'green';
        	}
        }
        
       
        function addAlert() {
        	if(alertsController.newalert.data && alertsController.newalert.property && alertsController.newalert.symbol && alertsController.newalert.symbol && alertsController.newalert.name){
        		alertsController.newalert.forule = alertsController.newalert.property + ' ' + alertsController.newalert.symbol + ' '+alertsController.newalert.data
        		alertsController.newalert.forAttrib = alertsController.newalert.property;
        		alertsController.newalert.forval = alertsController.newalert.symbol + ''+alertsController.newalert.data;
        		alertsController.newalert.roles = $scope.multipleRoles;
        		CommonService.postData(true,'sweb/alertsRest/addAlert',alertsController.newalert).then(function(response){
		   
        		alertsController.setalerts = response;
        		
				response = { success: true ,message :"Saved succesfully"};
				FlashService.Success(response.message);

        	
					 
        	});
        		
        	}
		 }
        
        function viewAlert(ind){
        	
        	 $location.path("/viewalert").search('p', ind).search('r', $scope.selctedrule);
        	 
        }

 
                
    }})();



