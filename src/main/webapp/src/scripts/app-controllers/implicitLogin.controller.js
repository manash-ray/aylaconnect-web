(function() {
	'use strict';

	angular.module('app').controller('ImplicitLoginController',
			ImplicitLoginController);

	ImplicitLoginController.$inject = [ '$location', 'AuthenticationService',
			'FlashService', '$scope', '$cookieStore', '$rootScope', '$auth',
			'CommonService', '$window' ];
	function ImplicitLoginController($location, AuthenticationService,
			FlashService, $scope, $cookieStore, $rootScope, $auth,
			CommonService, $window) {
		var implicitLoginController = this;
		$rootScope.resetPasswordInfo = {};
		implicitLoginController.user = {};


		(function initController() {


			implicitLoginController.dataLoading = true;

			var authtype = "email";

			CommonService
					.postData(false, 'sweb/userRest/implicitLogin',
							implicitLoginController.user)
					.then(
							function(response) {

								if (response) {

									localStorage.setItem("access_token",
											response.access_token);

									implicitLoginController.user.id = response.id;
									CommonService
											.postData(
													true,
													'sweb/userRest/getUserById',
													implicitLoginController.user,
													{})
											.then(
													function(iresponse) {

														var innerResponse = iresponse;
														innerResponse.profilePicture = "img/defaultprofile.png";
														innerResponse.profilePicture_70_70 = "img/defaultprofile.png";
														innerResponse.profilePicture_300_300 = "img/defaultprofile.png";

														AuthenticationService
																.SetCredentials(
																		innerResponse.firstname,
																		innerResponse.lastname,
																		response,
																		innerResponse.uuid,
																		innerResponse,
																		response.access_token);
														implicitLoginController.user = {};
														
														CommonService.postData(true, 'sweb/alertsRest/loadSpAlerts',
													{
															
													}).then(function(response) {
															if( response ){
																implicitLoginController.vi = response;			
															}
														});

														
													});

								} else {
									FlashService.Error(response.message);
									implicitLoginController.dataLoading = false;
								}
							});
		
			// reset login status
			// AuthenticationService.ClearCredentials();
		})();
		// country list

		/* login method with spring security outh2.0 */
		function loginOauth() {}
		;

	}

})();
