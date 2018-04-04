 
(function () {
    'use strict';
 
    angular
    .module('app')
    .controller('FailureController', FailureController);
    
	 
    FailureController.$inject = ['$location','FlashService','$scope','$rootScope','$routeParams','CommonService'];
	 function FailureController($location,FlashService,$scope,$rootScope,$routeParams,CommonService) {
		 var failureController = this;
		 //controller variables
		 $scope.alerts ={};
  	   //alert(localStorage.getItem("url"));
		 $scope.alerts['edu']=[];
    	 $scope.alerts['edu'] = [{ type: 'danger', createdAt: Date.now() , msg: "Payment unsuccessful" }];
    	 flashsetinterval($scope.alerts['edu']);
    	 
    	 $scope.appName =localStorage.getItem("appName");
         $scope.paymentId =localStorage.getItem("paymentId");
         $scope.requestId =localStorage.getItem("requestId");
         $scope.totalPrice =localStorage.getItem("totalPrice");
      	$scope.redirectUrl =localStorage.getItem("url")
       
      //requestId:  $scope.requestId,
       $scope. printFunction = function() {
   	    window.print();
      }
       
       $scope.cancelCoupon = function(){

    	   var failureMessageObject = {
    			   			
    			   			requestId:  $scope.requestId
    			   			
    	                 };
    	   
    	   CommonService.postData(true,'sweb/couponsRest/secured/cancel', failureMessageObject).then(function(response){
               
               if (response.success) {
            		localStorage.removeItem("appName");
                    localStorage.removeItem("paymentId");
                    localStorage.removeItem("requestId");
                    localStorage.removeItem("totalPrice");
                  	localStorage.removeItem("url")
            	   $location.path("/download-app")
                   
               }
            });

         
    	   
       }
       $scope.repayCoupon = function(){
    	   
           //url save
           
    	   CommonService.postData(true,'sweb/couponsRest/secured/createPayment', '{"requestId":"'+localStorage.getItem("requestId")+'"}').then(function(response){
               
               if (response.success) {
            	   window.location.href = localStorage.getItem("url");
                   
               }else {
               	alert("error");
               }
            });
           
           
    	   

         
    	   
       }
       
       
       /*flash messages interval*/
	    function flashsetinterval(array)
	    {
	    	var maxLifespan = 5000;
			// check once per second
			var interval =setInterval(function checkItems(){
			
				array.forEach(function(item){
					var d= convertUtcToLocalTime(Date.now());
					var d1= convertUtcToLocalTime(item.createdAt);
					var diff= Math.abs(d-d1);
			        if(diff > maxLifespan){
			        	array.shift(); 
			        	
			        	 $scope.$apply();   // remove first item
			        	
			        	
			        	 clearInterval(interval);
			        	
			        }
			    });
			},1000);
	    }
	 }})();