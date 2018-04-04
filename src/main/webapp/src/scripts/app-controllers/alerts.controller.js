(function () {
    'use strict';

    angular
        .module('app')
        .controller('AlertsController', AlertsController);

    AlertsController.$inject = ['$location','FlashService','$scope','$rootScope','$routeParams','CommonService', 'toastr', '$interval'];
    function AlertsController($location,FlashService,$scope,$rootScope,$routeParams,CommonService, toastr, $interval) {
       
    	var alertsController = this;
    	alertsController.viewAlert = viewAlert;   
    	alertsController.addAlert = addAlert;
    	alertsController.alertsmap = {};
    	alertsController.alerts = [];
    	alertsController.newalert = {};
    	 $scope.properties = [];
    	 $scope.selctedrule = 'High  Grill  Temp';
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
        	
    		if($location.path() == '/alerts'){
        
	        	
	        	CommonService.postData(true,'sweb/alertsRest/getAssignedAlerts/'+ -1+'/'+0, {}).then(function(response){
	  
	        		alertsController.alertsmap=response;
	        		$rootScope.globalsalertsmap = response;
	        		alertsController.alerts = alertsController.alertsmap[$scope.selctedrule];
	        	     $.each(alertsController.alertsmap, function(key, value) {        	               
	        	    	 $scope.rules.push(key);        	        
	        	     });
	        	        

	        		
	            	
	        	});
        	
        	
    		}
    		
    		if ($location.path() == '/alertsettings'){
        		
        		CommonService.postData(true,'sweb/alertsRest/getSetAlerts', {}).then(function(response){
     			   
                	alertsController.setalerts = response;
                	
                	});
    		}
        	
    		if ($location.path() == '/newalert'){
        	
	        	$scope.properties.push("WiFi Signal Strength"); 
	        	$scope.properties.push("Gas Level"); 
	        	$scope.properties.push("Grill Temp");
	        	$scope.properties.push("Probe Status");
	
	        	
	        	
	        	$scope.models.push("AC2700 BBQ");
	        	$scope.models.push("AC2200 Griddle");
	        	$scope.models.push("AC2000 Pressure");
	
	        	
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
        
        $scope.StartTimer = function () {
           
            //Initialize the Timer to run every 1000 milliseconds i.e. one second.
            $scope.Timer = $interval(function () {
            	CommonService.postData(true,'sweb/alertsRest/loadVi', alertsController.vi).then(function(response){
            	alertsController.vi = response;
            	//alertsController.vi.status = 'R';
            	});
            }, 10000);
        };
       
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



