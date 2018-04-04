(function() {
	'use strict';

	angular.module('app').controller('SPAlertsController', SPAlertsController);

	SPAlertsController.$inject = [ '$location', 'FlashService', '$scope',
			'$rootScope', '$routeParams', 'CommonService', 'toastr',
			'$interval' ];
	function SPAlertsController($location, FlashService, $scope, $rootScope,
			$routeParams, CommonService, toastr, $interval) {

		var sPAlertsController = this;

		sPAlertsController.vi = {};

		(function initController() {

			CommonService.postData(true, 'sweb/alertsRest/loadSpAlerts',
					sPAlertsController.vi).then(function(response) {
						if( response ){
							sPAlertsController.vi = response;			
						}
			});

		})();
		
		
		$scope.openSignupModal=function openSignupModal(){
	  		$("#perfdiagnomodal").modal("toggle");
	  		$route.reload();
	    }
		

	}
})();
