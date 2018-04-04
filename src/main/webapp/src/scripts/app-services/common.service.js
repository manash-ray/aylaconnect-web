(function () {
    'use strict';
   var basePath="";
    angular
        .module('app')
        .factory('CommonService', CommonService);

    CommonService.$inject = ['$http','$q','$rootScope','$location','toastr','$cookieStore'];
    function CommonService ($http, $q,$rootScope,$location,toastr, $cookieStore) {

    	 function config() {return  {headers:  {
 	        'Authorization':  "Bearer " + localStorage.access_token,
 	        'Accept': 'application/json,text/plain, text/html;odata=verbose'
 	        	
 	        
 	    }
 	    }};
    	    
        return {
            getData: function (isSecured, route, data) {
                var defer = $q.defer();
                var data = $.param(data);
                if(isSecured)
                	{
                	   $http.get(projectUrl+ route+data, config()).success(function (data) {
                           defer.resolve(data);
                       }).error(function (error, errorCode) {
                    	   if(errorCode==401)
                    		   {
                    		   toastr.error('Invalid access token');
                    		   document.cookie = 'globals' +"=" + JSON.stringify($rootScope.globals) + "; expires=" + 'Thu, 01 Jan 1970 00:00:00 GMT' 
                               + "; domain=.ayalaconnect.com; path=/";
                    		   $location.path('/');
                    		     // window.location = projectWebUrl;
                    		   // redirect to login
                    		   }
                    	   else if(errorCode==500)
                    		   {
                    		   toastr.error('Some Error Occured. Please try after sometime');
                    		   //
                    		   }
                           defer.reject('An error has occurred :(');
                       }
                   );
                	}
                else{
                	   $http.get(projectUrl+ route+data).success(function (data) {
                           defer.resolve(data);
                       }).error(function (error, errorCode) {
                    	   if(errorCode==500)
                		   {
                		   toastr.error('Some Error Occured. Please try after sometime');
                		   //
                		   }
                           defer.reject('An error has occurred :(');
                       }
                   );
                }
                return defer.promise;
            },
            postData: function (isSecured,route, data) {
            	
                var defer = $q.defer();
                //data = $.param(data);
                if(isSecured)
            	{
                	 $http.post(projectUrl+ route, data,config(),
                             {}).
                             success(function (data) {
                                 defer.resolve(data);
                             }
                         ).error(function (error, errorCode) {
                      	   		if(errorCode==401)
                      	   		{
		                		   toastr.error('Invalid access token');
		                		   document.cookie = 'globals' +"=" + JSON.stringify($rootScope.globals) + "; expires=" + 'Thu, 01 Jan 1970 00:00:00 GMT' 
		                           + "; domain=.ayalaconnect.com; path=/";
		                		   $location.path('/');
		                		     // window.location = projectWebUrl;
		                		   // redirect to login
		                		   }
		                	   else if(errorCode==500)
		                		   {
		                		   toastr.error('Some Error Occured. Please try after sometime');
		                		   //
		                		   }
		                       defer.reject('An error has occurred :(');
		                   }
                         );
            	}
                else
                	{
                	 $http.post(projectUrl+ route , data,
                             {}).
                             success(function (data) {
                                 defer.resolve(data);
                             }
                         ).error(function (error, errorCode) {
                    	   if(errorCode==500)
                		   {
                		   toastr.error('Some Error Occured. Please try after sometime');
                		   //
                		   }
                           defer.reject('An error has occurred :(');
                       }
                         );
                	}
               
                return defer.promise;
            },
            updateData: function (isSecured,route, data) {
                var defer = $q.defer();
               // data = $.param(data);
                if(isSecured)
            	{
                	$http.put(projectUrl+ route , data,config(),
                            {}).
                             success(function (data) {
                                 defer.resolve(data);
                             }
                         ).error(function (error, errorCode) {
                   	   		if(errorCode==401)
                  	   		{
	                		   toastr.error('Invalid access token');
	                		   document.cookie = 'globals' +"=" + JSON.stringify($rootScope.globals) + "; expires=" + 'Thu, 01 Jan 1970 00:00:00 GMT' 
	                           + "; domain=.ayalaconnect.com; path=/";
	                		   $location.path('/');
	                		     // window.location = projectWebUrl;
	                		   // redirect to login
	                		   }
	                	   else if(errorCode==500)
	                		   {
	                		   toastr.error('Some Error Occured. Please try after sometime');
	                		   //
	                		   }
	                       defer.reject('An error has occurred :(');
	                   }
                         );
            	}
                else
            		{
		                	$http.put(projectUrl+ route , data,config,
		                            {}).
		                             success(function (data) {
		                                 defer.resolve(data);
		                             }
		                         ).error(function (error, errorCode) {
		                      	   		
				                	if(errorCode==500)
				                		   {
				                		   toastr.error('Some Error Occured. Please try after sometime');
				                		   //
				                		   }
				                       defer.reject('An error has occurred :(');
				                   }
		                         );
            		}
                
                return defer.promise;
            },
            deleteData: function (isSecured,route, data) {
                var defer = $q.defer();
                data = $.param(data);
                if(isSecured)
            	{
                	 $http.delete(projectUrl+ route ,config()).
                             success(function (data) {
                              defer.resolve(data);
                             }
                         ).error(function (error, errorCode) {
                    	   		if(errorCode==401)
                      	   		{
    	                		   toastr.error('Invalid access token');
    	                		   document.cookie = 'globals' +"=" + JSON.stringify($rootScope.globals) + "; expires=" + 'Thu, 01 Jan 1970 00:00:00 GMT' 
    	                           + "; domain=.ayalaconnect.com; path=/";
    	                		   $location.path('/');
    	                		     // window.location = projectWebUrl;
    	                		   // redirect to login
    	                		   }
    	                	   else if(errorCode==500)
    	                		   {
    	                		   toastr.error('Some Error Occured. Please try after sometime');
    	                		   //
    	                		   }
    	                       defer.reject('Cannot delete data from the server :(');
    	                   }
                         );
            	}
                else
                	{
                	 $http.delete(projectUrl+ route).
                             success(function (data) {
                                 defer.resolve(data);
                             }
                         ).error(function (error, errorCode) {
                   	   		
			                	if(errorCode==500)
			                		   {
			                		   toastr.error('Some Error Occured. Please try after sometime');
			                		   //
			                		   }
			                       defer.reject('Cannot delete data from the server :(');
			                   }
                         );
                	}
               
                return defer.promise;
            }
        };
    }
})();
