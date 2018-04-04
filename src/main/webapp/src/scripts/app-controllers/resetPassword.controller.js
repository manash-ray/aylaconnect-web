(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResetPasswordController', ResetPasswordController);

    ResetPasswordController.$inject = ['$location','FlashService','$scope','$rootScope','$routeParams','CommonService'];
    function ResetPasswordController($location,FlashService,$scope,$rootScope,$routeParams,CommonService) {
        var resetPasswordController = this;
        resetPasswordController.user={};
        
        resetPasswordController.resetPassword = resetPassword;  
        
 
        (function initController() {
        	
        	$scope.isSuccefull=false;
        	
        	if($rootScope.resetPasswordInfo != undefined || $rootScope.resetPasswordInfo != null ){
        		resetPasswordController.user.email = $rootScope.resetPasswordInfo.email; 
        		resetPasswordController.user.mobile = $rootScope.resetPasswordInfo.mobile;
        		resetPasswordController.user.oneTimeKey = $rootScope.resetPasswordInfo.oneTimeKey;
        	}
        	// var searchObject = $location.search();
        	 
        	// resetPasswordController.user.link=searchObject.link;
        	// resetPasswordController.user.email=searchObject.email;
         	
        	 
        	 
        	/* CommonService.postData(true,'sweb/userRest/linkValid', '{"email":"'+resetPasswordController.user.email+'","oneTimeKey":"'+ resetPasswordController.user.link+'"}').then(function(response){
        	
        		  resetPasswordController.linkValid=response;
        		  if(resetPasswordController.linkValid==false)
        			  {
        			  $("#errText").removeClass("ng-hide");
        			  }
        		  else
        			  {
        			  $("#successText").removeClass("ng-hide").addClass("ng-show");
        			  
        			  }
            });*/
         	
        })();
    
        function resetPassword() {
        	
        	resetPasswordController.dataLoading = true;
        	if(resetPasswordController.user.password!=resetPasswordController.user.confirmPassword)
        		{
        		   FlashService.Error('Passwords doesnt match');
        		   return;
        		}
        	
        	
        	 CommonService.postData(false,'sweb/userRest/changeForgotPassword', resetPasswordController.user).then(function(response){
        	
        		 if (response.success) {
                     //  AuthenticationService.SetCredentials(vm.username, vm.password);
                   	 response = { success: true ,message :"Password has been changed successfully!!!"};
                   	FlashService.Success(response.message);
                   	resetPasswordController.user={};
                   	$scope.isSuccefull=true;
                   /*	$location.url('/');*/
                } else {
                	
                	
                	 
                	 if(response.messages[0]=='ERROR_OCCURED_PLEASE_CONTACT_ADMINISTRATOR')
                		 {
                		 	response = { message :"Error Occured Please Contact Administrator!!!"};
                     	
                		 	
                		 }
                	 
                	 else if(response.messages[0]=='PASSWORD_SHOULD_BE_ALPHA_NUMERIC'){
                		 response = { message :"Password  should be minimum 8 character and  alpha numeric!!!"};
                		 
                	 }
                	 FlashService.Error(response.message);
                	 
               	resetPasswordController.dataLoading = false;
               }
            });
        	
       };
       
       
       $scope.redirectToLogin=function redirectToLogin (){
    	   
    	   $location.path('/');
    	   
       };
       
       
       
        
       
       
    }})();



