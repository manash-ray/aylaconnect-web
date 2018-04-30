(function() {
	'use strict';
	angular.module('app').controller('ImplicitLoginController',
			ImplicitLoginController);

	ImplicitLoginController.$inject = ['$http','$q', '$location', 'AuthenticationService',
			'FlashService', '$scope', '$cookieStore', '$rootScope', '$auth',
			'CommonService', '$window','toastr', 'NgMap', 'Socialshare', 'ngMeta' ];
	function ImplicitLoginController($http, $q, $location, AuthenticationService,
			FlashService, $scope, $cookieStore, $rootScope, $auth,
			CommonService, $window, toastr, NgMap, Socialshare, ngMeta) {
		var implicitLoginController = this;
		$rootScope.resetPasswordInfo = {};
		implicitLoginController.user = {};
		implicitLoginController.openSignupModal=openSignupModal;
		
		(function initController() {

			implicitLoginController.dataLoading = true;
			var authtype = "email";
			if($location.path() == '/serviceProvider' || !$rootScope.viobject){
				
				CommonService
					.postData(false, 'sweb/userRest/implicitLogin',
							implicitLoginController.user)
					.then(
							function(response) {

								if (response) {
									
									var token =   {headers:  {
							 	        'Authorization':  "Bearer " + response.access_token,
							 	        'Accept': 'application/json,text/plain, text/html;odata=verbose'
							 	        	
							 	        
							 	    }
							 	    }
									
									implicitLoginController.user.id = response.id;
									
									 var defer = $q.defer();
									$http.post(projectUrl+ 'sweb/alertsRest/loadSpAlerts', implicitLoginController.user,token,
				                             {}).
				                             success(function (data) {
				                            	 defer.resolve(data);
				                            	 $rootScope.viobject = data;	
				                             }
				                         ).error(function (error, errorCode) {
				                      	   		
						                		toastr.error('Some Error Occured. Please try after sometime');
						                	
						                		 
						                      
						                   }
				                         );
										

								} else {
									FlashService.Error(response.message);
									implicitLoginController.dataLoading = false;
								}
							});
			
			
			}
		
		
		})();
		
		function openSignupModal(){
			
			$("#perfdiagnomodal").modal("show");
			//$route.reload();
	  		
	    }

	}

})();
