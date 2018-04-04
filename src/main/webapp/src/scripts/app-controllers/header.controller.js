(function () {
    'use strict';

    angular
        .module('app')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$location','FlashService','$scope','$rootScope','$routeParams','$cookieStore','$route','CommonService'];
    function HeaderController($location,FlashService,$scope,$rootScope,$routeParams,$cookieStore,$route,CommonService) {
        var headerController = this;
        headerController.logout=logout;    
       
        headerController.profileNameToggle=profileNameToggle;
      
        headerController.settingsToggle=settingsToggle;
        headerController.changePasswordToggle=changePasswordToggle;
        
          
  
        (function initController() {
        })();
        
        
        
        
    	/*hide other menus when profile menu is clicked*/
        $scope.profilemenu = function profilemenu()
    	{
    		
         	   $('#profile-top-menu').show();
     	    
    	};
    	
    	//code for search placeholder in header.html
    	 $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
    	       
    	         $scope.searchPlaceholder="Search Profiles";
    	        
    
    	     });
       
      	
        
      /*hide menus when clicked on document*/
        $(document).on('click', function(){
        	
        	$("#profile-top-menu").hide();
    	
        	
        	
        	
        });
        
        
       
        
      
        /*logout function */
        /*clear coockies*/
        function logout()
      {
        	document.cookie = 'access_token' + "=" + "; expires="
			+ 'Thu, 01 Jan 1970 00:00:00 GMT'
			+ "; domain=localhost; path=/";
        	localStorage.setItem("access_token", '');
        	document.cookie = 'globals' +"=" + JSON.stringify($rootScope.globals) + "; expires=" + 'Thu, 01 Jan 1970 00:00:00 GMT' 
            + "; domain=localhost; path=/";
    	 $("#profile-top-menu").toggle();
    	 location.reload();
    	 $location.path('/');
      }
    
      
      
        /*redirect to profile page when clicked */
        function profileNameToggle()
      {
    	  $("#profile-top-menu").toggle();
    	
    	  
    	  
    	  $location.path('/'+$rootScope.globals.currentUser.username);
      }
      
      
     
      
     
      
      /*redirect to change password page*/
      function changePasswordToggle()
      {
    	  $("#profile-top-menu").toggle();
    	 $location.path('/changePassword');
      }
      
     
      /*redirect to privacy setting page*/
      function settingsToggle()
      {
    	  $("#profile-top-menu").toggle();
    	 $location.path('/settings1');
      }
      
      
     
      /*search in profiles*/
      $scope.search=function search()
      {
    	 
    	
    	 
    		  $location.url('/profileSearch?q='+(headerController.q==undefined?'':headerController.q));
    		  //document.getElementById("myNumber").placeholder = "Amount"
    		  
    	      	 
      }
   
      

        
    }})();


