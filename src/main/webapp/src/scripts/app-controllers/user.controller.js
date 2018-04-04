(function () {
    'use strict';

    angular
        .module('app')
        .controller('UserController', UserController);

    UserController.$inject = ['$location','CommonService','AuthenticationService', 'FlashService', '$rootScope','$scope','$auth','$http'];
    function UserController($location,CommonService,AuthenticationService,FlashService,$rootScope,$scope,$auth,$http) {
        var userController = this;
        
       
        
        $scope.alerts={};
        
        if($rootScope.globals.currentUser)
        {
        userController.userId=$rootScope.globals.currentUser.id;
        userController.firstName=$rootScope.globals.currentUser.firstName;
        userController.lastName=$rootScope.globals.currentUser.lastName;
        
        }
        userController.Save = Save;
        userController.flashsetinterval = flashsetinterval;
        userController.verifyCaptcha = verifyCaptcha;
       userController.user={}; 
       userController.staffs=[];
        userController.authenticate = authenticate;
        userController.openSecondTab=openSecondTab;
       userController.isRegistrationAllowed=true;
       userController.datasiteKey=data_site_key;
       userController.secretKey=secret_key;
       var firstName=document.getElementById("first-name");
       var lastName=document.getElementById("last-name");
       userController.user.personaId = -1;

        (function initController() {
        	
        	CommonService.getData(false,'sweb/userRest/getStaffs/'+ -1+'/'+0, {}).then(function(response){
            	  
          		userController.staffs=response;
          	     });
        	
        })();
        
        function openSecondTab()
        {
        	  if(userController.user.personaId == -1){
        		  FlashService.Error("Please select User Type");
        		  return;
        	  }
                	 $(".tab-paned").removeClass("active");
                       	 userController.firstName= "FIRST NAME";
                    	 userController.showLastName=true;
                         $("#secondtab").addClass("active");
                    
                     $(".social-contn").show("1000");
                     return false;
                
        };
        
        /*register user*/
        function Save() {
        	
        	var status=verifyCaptcha();
        	if(status==true)
        		{
        		if(userController.user.personaId == -1){
        			userController.user.personaId = 2;
        		}
        		if(userController.user.confirmPassword==userController.user.password)
            		{

                	
                    userController.dataLoading = true;
                    
                    if (userController.user.lastName==undefined || userController.user.lastName==null){
                    	userController.user.lastName="";
                    }
			        
                    userController.user.registrationDate = new Date();
                    CommonService.postData(false, 'sweb/userRest/register', userController.user).then(function (response) {
                    	
                        if (response.success) {
                 
                        	 response = { success: true,message:'Registered Successfully.' };
                        	 $location.path('/login');                             
                             userController.user={};
                             if(userController.user.personaId == 1){
                            	 FlashService.Success('Registered Successfully.',true);
                            	 $location.path('/regsuccess');
                             }else{
                            	 FlashService.Success('User Created Successfully.',true);
                             }
                        	
                        } else {
                       	 	    response.messages.forEach(function(singleMessage) {
                       	 	     //FlashService.Error(singleMessage.message);
                       	 	 $scope.alerts['passwordError']=[];
             				$scope.alerts['passwordError'] = [{ type: 'danger', createdAt: Date.now() , msg:  singleMessage.message }];
             				flashsetinterval($scope.alerts['passwordError']);
                       	 	
                       	 
                       	 	    });
                         
                       	      userController.dataLoading = false;
                       }
                    });
                
                
            		}
            	else{
            		$scope.alerts['passwordError']=[];
    				$scope.alerts['passwordError'] = [{ type: 'danger', createdAt: Date.now() , msg:  password_matching_error }];
    				flashsetinterval($scope.alerts['passwordError']);
    			 	
    				return false;
            	}
            	
            
        		}
        	else
        		{
        		$scope.alerts['passwordError']=[];
				$scope.alerts['passwordError'] = [{ type: 'danger', createdAt: Date.now() , msg:  verify_captcha }];
				flashsetinterval($scope.alerts['passwordError']);
			
				return false;
        		}





        };
        
        

        
        /*flash messages interval*/
        function flashsetinterval(array)
        {
        	var maxLifespan = 5000;
    		// check once per second
    		var interval =setInterval(function checkItems(){
    		
    			array.forEach(function(item){
    				var d= convertUtcToLocalTime(Date.now())
    				var d1= convertUtcToLocalTime(item.createdAt)
    				var diff= Math.abs(d-d1);
    		        if(diff > maxLifespan){
    		        	array.shift(); 
    		        	
    		        	 $scope.$apply();   // remove first item
    		        	
    		        	
    		        	 clearInterval(interval);
    		        	
    		        }
    		    });
    		},1000);
        }
        
        
        /*verify captcha*/
        function verifyCaptcha()
        {	
        	
        		return true;
        		
        	
        }

     /* social  sign up   */
        /*for  google and facelogin*/
        function authenticate(provider){
        	userController.personaId=userController.personaValue[Object.keys(userController.personaMastersMap).length-1].id;
        	
            $auth.authenticate(provider, {personaId: userController.personaId})
              .then(function(response) {
            	  
            	  localStorage.setItem("access_token",response.data.tokenObject.access_token);
            	  
            	/*  CommonService.postData(true,'sweb/profileRest/getProfileByEmailId', '{"email":"'+response.data.id+'"}',{}).then(function(iresponse){
            	  
            	 
							    var innerResponse=iresponse;
								var mydate = new Date(innerResponse.dob);
								innerResponse.dob=mydate;
                            
								
								if (innerResponse.profileVo.currentProfilePictureId != null) {
									innerResponse.profilePicture = projectUrl
											+ 'sweb/pictureRest/viewPicture/'
											+ innerResponse.profileVo.currentProfilePictureId;
									innerResponse.profilePicture_70_70= getPictureUrlWithExtension(innerResponse.profileVo.currentProfilePictureId,innerResponse.picType,innerResponse.picName,"thumnail_70_70");
									innerResponse.profilePicture_300_300= getPictureUrlWithExtension(innerResponse.profileVo.currentProfilePictureId,innerResponse.picType,innerResponse.picName,"thumnail_300_300");
									
								} else
									innerResponse.profilePicture = "img/defaultprofile.png";
								
								
								
								$location.path('/'+innerResponse.userName);
								
							
							});
							*/
            	  
            	  // call login api
              })
              .catch(function(error) {
                if (error.data.error=="unauthorized") {
                	
                	$scope.alerts['passwordError']=[];
    				$scope.alerts['passwordError'] = [{ type: 'danger', createdAt: Date.now() , msg: error.data.error_description}];
    				flashsetinterval($scope.alerts['passwordError']);
                  // Popup error - invalid redirect_uri, pressed cancel button, etc.
                	/*FlashService.Error('User is already registered !!!');*/
                } else if (error.data) {
                  // HTTP response error from server
                	$scope.alerts['passwordError']=[];
    				$scope.alerts['passwordError'] = [{ type: 'danger', createdAt: Date.now() , msg: error.data.error_description}];
    				flashsetinterval($scope.alerts['passwordError']);
                } else {
                	FlashService.Error(error);
                }
              });
          };
          
          
        
          

    }})();

