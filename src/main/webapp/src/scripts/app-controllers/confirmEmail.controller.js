(function () {
    'use strict';

    angular
        .module('app')
        .controller('ConfirmEmailController', ConfirmEmailController);

    ConfirmEmailController.$inject = ['$location','FlashService','$scope','$rootScope','$routeParams','CommonService'];
    function ConfirmEmailController($location,FlashService,$scope,$rootScope,$routeParams,CommonService) {
        var confirmEmailController = this;
        
        (function initController() {
        	var searchObject = $location.search();
        	confirmEmailController.user={};
        	confirmEmailController.user.link=searchObject.link;
        	confirmEmailController.user.email=searchObject.email;
        	
        	 
        	/*confirms email  if one time key is valid*/
        	/*CommonService.postData(true,'sweb/userRest/confirmEmail', '{"email":"'+confirmEmailController.user.email+'","oneTimeKey":"'+confirmEmailController.user.link+'"}',{}).then(function(response){
        	
   
    	  confirmEmailController.success=response;
    });
      */
        
      
      
 })();

       
       
    }})();



