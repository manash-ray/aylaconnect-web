(function () {
    'use strict';

    angular
        .module('app')
        .controller('ChangePasswordController', ChangePasswordController);

    ChangePasswordController.$inject = ['$location','FlashService','$scope','$rootScope','$routeParams','$cookieStore','CommonService'];
    function ChangePasswordController($location,FlashService,$scope,$rootScope,$routeParams,$cookieStore,CommonService) {
        var changePasswordController = this;
        
        changePasswordController.changePassword = changePassword;  
        
 
        (function initController() {
       
        	
        })();
        
        
        
    // password change
        function changePassword() {
        	
        	changePasswordController.dataLoading = true;
        	changePasswordController.user.id=$rootScope.globals.currentUser.id;
        	

        	
        	if(changePasswordController.user.password!=changePasswordController.user.confirmPassword)
        		{
        		   FlashService.Error("Passwords doesn't match");
        		   return;
        		}
        	
        	CommonService.postData(false,'sweb/userRest/changePassword',changePasswordController.user).then(function(response){
        	
        
        		
        		
        		
        		 if (response) {
                     //  AuthenticationService.SetCredentials(vm.username, vm.password);
                   	 response = { success: true ,message :"Password has been changed successfully!!!"};
                   	 
                   	FlashService.Success(response.message,true);
                   	
                   	document.cookie = 'globals' +"=" + JSON.stringify($rootScope.globals) + "; expires=" + 'Thu, 01 Jan 1970 00:00:00 GMT' 
                    + "; domain=localhost; path=/";
               	   $("#profile-top-menu").toggle();
               	    $location.path('/login');
                   	
                   	
                   	
                   	
                   	
                } else {
               	
               	 FlashService.Error("Password should be alphanumeric");
               	 
               	changePasswordController.dataLoading = false;
               }
            });
        	
       };
        
       
       
    }})();



