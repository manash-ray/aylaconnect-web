(function () {
    'use strict';
   var basePath="";
    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.login = login;
        service.loginOauth=loginOauth;
        service.Save=Save;
        service.get=get;
        service.getUserDetailsByUserId = getUserDetailsByUserId;
        service.sendForgotPasswordMail=sendForgotPasswordMail;
        service.confirmEmail=confirmEmail;
        service.linkValid=linkValid;
        service.changeForgotPassword=changeForgotPassword;
        service.updatePersonaId=updatePersonaId;
        service.changePassword=changePassword;
        service.getUserSearchVos=getUserSearchVos;
        service.getUserDetailsByUserName = getUserDetailsByUserName;
        service.usernameValidate=usernameValidate;
        service.getCaptchVerification=getCaptchVerification;
        
        
        return service;

        function GetAll() {
            return $http.get(basePath+'user/getAllUsers').then(handleSuccess, handleError('Error getting all users'));
        }

        function getUserDetailsByUserId(userId) {
        	/*var response= $http.get(projectUrl+'sweb/userRest/getUserDetails/' + userId).then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            return response;*/
            

        	
        	
            


			var returnHtml = {};
			jQuery.ajax({
				url : projectUrl+'sweb/userRest/getUserDetails/'+userId,
				async : false,
				cache : false,
				dataType : "json",
				success : function(html) {
					returnHtml = html;
				}
			});
			return returnHtml;
		
            
        	
        
            
        }
        
        function getUserDetailsByUserName(userName,callback) {


			var returnHtml = {};
			jQuery.ajax({
				url : projectUrl+'sweb/userRest/getUserDetailsByUserName/'+userName,
				async : false,
				cache : false,
				dataType : "json",
				success : function(html) {
					returnHtml = html;
				}
			});
			return returnHtml;
		
        
            
        }
        
        function GetById(id) {
            return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('http://localhost:8889/canishop/restapi/user/getUserById/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }
        
        function login(user) {
           return $http.post(projectUrl+'sweb/userRest/login',user).then(handleSuccess, handleError('Error getting user by username'));
       }
      
        function loginOauth(user) {
        	user.username=user.email;
        	return $http.post(projectUrl+'oauth/token?client_id=restapp&client_secret=restapp&grant_type=password&scope=read,write,trust', user,
        			{
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: function(data){
                    return $.param(data);
                }
            }).then(handleSuccess,handleSuccess);
          
        }
        
        function get(user,id,callback){
        	var restResponse= $http.get(projectUrl+'sweb/userRest/get/'+id,user).then(handleSuccess, handleError('Error')).then(function (restResponse) {
          	
             callback(restResponse);
        	 console.log(restResponse.toString());
              return restResponse;
          });
           
         }//get end
        
        
        // username validate
        function usernameValidate(username,id,callback){
        	var restResponse= $http.get(projectUrl+'sweb/userRest/usernameValidate/'+username+'/-1').then(handleSuccess, handleError('Error')).then(function (restResponse) {
          	
             callback(restResponse);
        	 console.log(restResponse.toString());
              return restResponse;
          });
           
         }
        
        
        function Save(user,callback) {
        	var response= $http.post(projectUrl+'sweb/userRest/register',user).then(handleSuccess, handleError).then(function (restResponse) {
          	  var response;
          	  if (restResponse.success) {
                  response = { success: true,  message: 'Registered Successfully' };
              } else {
            	  
                  response = { success: false, message: (restResponse.messages[1])};
              }
              callback(response);
          });
            return response;
        }

        function Create(user) {
            return $http.post('http://localhost:8889/canishop/restapi/user/getAllUsers', user).then(handleSuccess, handleError('Error creating user'));
        }
        
        function getCaptchVerification(secretKey,response,callback) {
        	
        	
        	
            var response1= $http.post('https://www.google.com/recaptcha/api/siteverify?secret='+secretKey+"&response="+response).then(handleSuccess, handleError('Error creating user')).then(function (restResponse) {
            	callback(response1);
            });
            };
            
        
        

        function Update(user) {
                    var response= $http.put(projectUrl+'sweb/userRest/update/', user).then(handleSuccess, handleError('Error Updating User')).then(function (restResponse) {
            	  var response;
                if (restResponse.success) {
                    response = { success: true };
                } else {
              	  
                    response = { success: false, message: '' };
                }
                callback(response);
            });
              return response;
        }
        
        
	        function updatePersonaId(user,callback) {
	            var response= $http.put(projectUrl+'sweb/userRest/updatePersonaId/', user).then(handleSuccess, handleError('Error Updating User')).then(function (restResponse) {
	    	  var response;
	        if (restResponse.success) {
	            response = { success: true };
	        } else {
	      	  
	            response = { success: false, message: '' };
	        }
	        callback(response);
	    });
	      return response;
}

        function Delete(id) {
            return $http.put('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        
        // send forgot password mail
        function sendForgotPasswordMail(userEmail,callback) {
        	var response= $http.post(projectUrl+'sweb/userRest/sendForgotPasswordMail', '{"email":"'+userEmail.email+'"}').then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            
        	return response;
        }
        
        // send forgot password mail
        function confirmEmail(userEmail,callback) {
        	var response= $http.post(projectUrl+'sweb/userRest/confirmEmail', '{"email":"'+userEmail.email+'","oneTimeKey":"'+userEmail.link+'"}').then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            
        	return response;
        }
        
     // send forgot password mail
        function linkValid(userEmail,callback) {
        	var response= $http.post(projectUrl+'sweb/userRest/linkValid', '{"email":"'+userEmail.email+'","oneTimeKey":"'+userEmail.link+'"}').then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            
        	return response;
        }
        
        // send forgot password mail
        function changeForgotPassword(userEmail,callback) {
        	
        	
        	var response= $http.post(projectUrl+'sweb/userRest/changeForgotPassword', '{"email":"'+userEmail.email+'","password":"'+userEmail.password+'","oneTimeKey":"'+userEmail.link+'"}').then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
        		
        		
        		 if (restResponse.success) {
                     response = { success: true,  message: 'Password Change Succesfully' };
                 } else {
               	  
                     response = { success: false, message: (restResponse.messages[0])};
                 }
                 callback(response);
             
            
        		
             
          });
        	   return response;
    }
        	
            
        
     
        
        // send forgot password mail
        function changePassword(userEmail,callback) {
        	var response= $http.post(projectUrl+'sweb/userRest/changePassword',userEmail).then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            
        	return response;
        }
        
        
        function getUserSearchVos(q,firstResult, maxResult,callback) {
        	var response= $http.get(projectUrl+'sweb/userRest/getUserSearchVos/'+firstResult+'/'+maxResult+'?q='+q).then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            return response;
        }
        
        
        
        
        
        // private functions

        function handleSuccess(data) {
            return data.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        };
    
    }
})();
