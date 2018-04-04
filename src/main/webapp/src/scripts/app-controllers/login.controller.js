(function () {
	'use strict';

	angular
	.module('app')
	.controller('LoginController', LoginController);

	LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService','$scope','$cookieStore','$rootScope','$auth','CommonService', '$window'];
	function LoginController($location, AuthenticationService, FlashService,$scope,$cookieStore,$rootScope,$auth,CommonService, $window) {
		var loginController = this;
		$rootScope.resetPasswordInfo = {};
		loginController.user = {};
		loginController.login = login;
		loginController.loginOauth = loginOauth;
	
		var rootapp = '';
		if ( $location.search().hasOwnProperty( 'rootapp' ) ) {
			rootapp = $location.search()['rootapp'];
			   
		}
		
		(function initController() {			
			// reset login status
			//  AuthenticationService.ClearCredentials();
		})();
		//country list

		

		$scope.confirmOTP = function(){


			CommonService.postData(false,'sweb/userRest/confirmEmail', loginController.user).then(function(response){

				if (response) {
					if($scope.showOtpResetBox == true){
						$rootScope.resetPasswordInfo = loginController.user; 
						$location.path("/resetPassword");
					}
					
					$scope.status();
					FlashService.Success("OTP is Comfirm..!! Ready To Go");

				}else{

					
					

				}
			});

		}
		
		$scope.closemodal = function(){
			$location.path('/home');
		}

		/*login method with spring security outh2.0 */
		function loginOauth() {
			
					
			
			loginController.dataLoading = true;
			
			var authtype = "email";

			
			CommonService.postData(false,'sweb/userRest/login',loginController.user).then(function(response){
				  
        		if (response) {

							
					
					localStorage.setItem("access_token",response.access_token);
			
					
					loginController.user.id = response.id;
					CommonService.postData(true,'sweb/userRest/getUserById', loginController.user,{}).then(function(iresponse){

						var innerResponse=iresponse;
						innerResponse.profilePicture = "img/defaultprofile.png";
						innerResponse.profilePicture_70_70 = "img/defaultprofile.png";
						innerResponse.profilePicture_300_300 ="img/defaultprofile.png";

					
						AuthenticationService.SetCredentials(innerResponse.firstname,innerResponse.lastname, response, innerResponse.uuid,innerResponse,response.access_token);
						loginController.user={};
						$location.path('/alerts');
					});	
					


				} else {
					FlashService.Error(response.message);
					loginController.dataLoading = false;
				}
			});
		};

	
		



	}

})();
