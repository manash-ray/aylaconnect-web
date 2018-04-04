(function () {
	'use strict';

	angular
	.module('app')
	.controller('ForgotPasswordController', ForgotPasswordController);

	ForgotPasswordController.$inject = ['$location','FlashService','$scope','$rootScope','$routeParams','CommonService'];
	function ForgotPasswordController($location,FlashService,$scope,$rootScope,$routeParams,CommonService) {
		var forgotPasswordController = this;
		$rootScope.resetPasswordInfo = {};
		forgotPasswordController.forgotPasswordRequest = forgotPasswordRequest;  
		forgotPasswordController.forgotPassword = {};
		$scope.dataLoading=false;
		forgotPasswordController.success =false;
		(function initController() {



		})();
		$scope.otpInputButton = false;
		$scope.confirmOTP = function(){

			
			CommonService.postData(false,'sweb/userRest/confirmEmail', forgotPasswordController.forgotPassword).then(function(response){

				if (response) {
					$rootScope.resetPasswordInfo = forgotPasswordController.forgotPassword;
				

						$location.path("/resetPassword")
				}else{
					

				}
			});

		}

		/*sends forgot password link to your email*/
		function forgotPasswordRequest() {
			if(isNaN($scope.emailOrMobile)){
				forgotPasswordController.forgotPassword.email = $scope.emailOrMobile;
				forgotPasswordController.forgotPassword.mobile = undefined;
			}else{
				forgotPasswordController.forgotPassword.mobile = $scope.emailOrMobile;
				forgotPasswordController.forgotPassword.email = undefined;	
			}
			$scope.dataLoading=true;
			if(forgotPasswordController.forgotPassword.email != undefined ||forgotPasswordController.forgotPassword.mobile != undefined){
				CommonService.postData(false,'sweb/userRest/sendForgotPasswordMail',forgotPasswordController.forgotPassword).then(function(response){

					
					if (response.success) {
						$scope.otpSuccess = true;
						$scope.otpInputButton = true;
						if(isNaN($scope.emailOrMobile)){
							response = { success: true ,message :"Reset Password OTP has been sent to your Email..!! Enter Your OTP to reset"};
							
						}else{
							response = { success: true ,message :"Reset Password OTP has been sent to your Mobile..!! Enter Your OTP to reset"};
						}

						FlashService.Success(response.message);
						forgotPasswordController.success =true;

						$scope.dataLoading=false;



					} else {

						FlashService.Error(response.message);

					}
				});
				forgotPasswordController.dataLoading= false;

			}else{
				FlashService.Error("Enter your Email Address or Mobile Number");
				$scope.dataLoading=false;
			}

		}

	}})();



