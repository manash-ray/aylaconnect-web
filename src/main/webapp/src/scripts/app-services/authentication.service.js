(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout'];
    function AuthenticationService($http, $cookieStore, $rootScope, $timeout) {
    	
        var service = {};

        
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;
        service.LoginOauth=LoginOauth;
        return service;

   
        
        function LoginOauth(user,authtype, rootapp, callback) {

        	
        		if(authtype == "email"){
        			user.username=user.email;
        		}
        		
        		var authurl = projectUrl+'oauth/token?username='+user.username+'&password='+user.password+'&client_id=restapp&client_secret=restapp&grant_type=password&scope=read,write,trust&authtype='+authtype;
        		
       	 $http.post(authurl, {}).then(function (response) {
       	
                if (response.data.access_token != undefined) {
                    response = { success: true,object:response.data };
                } else if(response.data.error_description=='EMAIL_NOT_CONFIRMED'){
                    response = { success: false, message: 'Your Email is not confirmed' };
                }
                else if(response.data.error_description=='YOUR_ACCOUNT_HAS_BEEN_DEACTIVATED'){
                    response = { success: false, message: 'Your account has been deactivated . Please contact administrator' };
                }
                else{
                    response = { success: false, message: 'Username or password is incorrect' };
                }
                callback(response);
       	 
       	 }, function (response){
       		 
       		 if(response.data.error=='server_error'){
       		  response = { success: false, message: 'Password is incorrect' };
       			 
       		 }
       		 
       		
       		 else if(response.data.error_description=='PASSWORD_NOT_CORRECT')
       			 {
       			    response = { success: false, message: 'Password is incorrect' };
       			 }
       		 else if(response.data.error_description=='EMAIL_NOT_CONFIRMED')
       			 {
       			 	response = { success: false, message: 'Your Email is not confirmed' };
       			 }
       		 else if(response.data.error_description=='EMAIL_MOBILE_NOT_CONFIRMED'){
       			
       			response = { success: false, message: 'Your Email or Mobile is not confirmed' };
       		 }
       		else if(response.data.error_description=='BAD_USER_CREDENTIALS')
  			 {
  			 	response = { success: false, message: 'You are not registered with us' };
  			 }
       		else if(response.data.error_description=='YOUR_ACCOUNT_HAS_BEEN_DEACTIVATED')
 			 {
 			 	response = { success: false, message: 'Your account has been deactivated . Please contact administrator' };
 			 }
       		
       		callback(response);
       	 });
       	 


        }

        function SetCredentials(firstName,lastName, object,id, user,accessToken) {
          			
			
            var authdata='abc';
            $rootScope.globals = {  
                currentUser: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    uuid: user.uuid,
                    profilePicture:user.profilePicture,
                    profilePicture_70_70:user.profilePicture_70_70,
                    profilePicture_300_300:user.profilePicture_300_300,                   
                    role:user.role.name,
                    email:user.email,
                    phone:user.phone
                  //  eavAttributeSetName:user.profileVo.eavAttributeSet.description
                    
            
                }
            };
            
         	var expireDate = new Date();					
			expireDate.setDate(expireDate.getDate() + 1);
            
            document.cookie = 'globals' +"=" + JSON.stringify($rootScope.globals) + "; expires=" + expireDate 
            + "; domain=localhost; path=/";
	
            //$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
          //  $cookieStore.put('globals', $rootScope.globals);
            
        	document.cookie = 'access_token' +"=" + accessToken + "; expires=" + expireDate 
            + "; domain=localhost; path=/";
            
			
        }

        function ClearCredentials() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        }
    }

    // Base64 encoding service used by AuthenticationService
    var Base64 = {

        keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    this.keyStr.charAt(enc1) +
                    this.keyStr.charAt(enc2) +
                    this.keyStr.charAt(enc3) +
                    this.keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = this.keyStr.indexOf(input.charAt(i++));
                enc2 = this.keyStr.indexOf(input.charAt(i++));
                enc3 = this.keyStr.indexOf(input.charAt(i++));
                enc4 = this.keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };

})();