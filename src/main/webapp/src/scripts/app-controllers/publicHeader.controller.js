(function () {
    'use strict';

    angular
        .module('app')
        .controller('PublicHeaderController', PublicHeaderController);

    PublicHeaderController.$inject = ['$location','FlashService','$scope','$rootScope','$routeParams','$cookieStore','$route','$templateCache','$compile','$timeout','Socialshare'];
    function PublicHeaderController($location,FlashService,$scope,$rootScope,$routeParams,$cookieStore,$route,$templateCache,$compile,$timeout,Socialshare) {
    	var publicHeaderController = this;
    	
    	
    	var invitationTemplate= $templateCache.get('AboutUs.html');
    	
    	
    	      
        
        $scope.openSignupModal=function openSignupModal(){
        	
        	
	  		$("#loginModal").modal("toggle");
	  		
	  		$route.reload();
	  		
	  		
        }
        
        $scope.emailShare=function emailShare(){
        	Socialshare.share({
                'provider': 'email',
                'attrs': {
                	
                	 'socialshare-body':'hello',
                	 'socialshare-media':'http://www.ayalaconnect.com/img/kh_logo_new.png',
                	  ' socialshare-subject':'ayalaconnect',
                	   'socialshare-popup-height':'300',
                	    'socialshare-popup-width':'400'
              
                	  
                }
        	
        	});
        	
        	
        	
        }
        
       

       
        
    }})();


