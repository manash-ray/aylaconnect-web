(function () {
    'use strict';
   var basePath="";
    angular
        .module('app')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = ['$http'];
    function ProfileService($http) {
        var service = {};

        service.get = get;
        service.updateByColumn=updateByColumn;
        
        service.getProfileByUserId = getProfileByUserId;
        service.getProfileByEmailId = getProfileByEmailId;
        service.getPath = getPath;
         service.getProfileUpdateVo=getProfileUpdateVo;
        service.companyAutosuggest= companyAutosuggest;
         service.countryAutoSuggest=countryAutoSuggest;
         service.getGalleryPictureIds=getGalleryPictureIds;
         service.specializationAutoSuggest=specializationAutoSuggest;
         service.searchSpecialization=searchSpecialization;
         service.getPictureByType=getPictureByType;
         service.updateDesc=updateDesc;
         service.updateCertification=updateCertification;
         
         service.deleteTeamMember=deleteTeamMember;
         
         service.updateEavAttributes=updateEavAttributes;
        
        service.getProfileVos=getProfileVos;
        
        service.getEavPicturesWithType=getEavPicturesWithType;
        
       
        service.update = update;
        service.getProfileByUserName = getProfileByUserName;
        
        service.getMapGeoCoardinates=getMapGeoCoardinates;
        
        
        return service;
        
        
        
        
        function searchSpecialization(parentId,callback){
        	var restResponse= $http.get(projectUrl+'sweb/specializationRest/getByParentId/'+parentId).then(handleSuccess, handleError('Error getting user by username')).then(function (restResponse) {
          	 var response;
              if (restResponse.success) {
                  response = { success: true ,message:"Saved Succesfully"};
              } else {
            	  
                  response = { success: false ,message:"Error"};
              }
             callback(restResponse);
        	 console.log(restResponse.toString());
              return restResponse;
          });
           
        	
        	
        }
        
        
        function deleteTeamMember(id,callback) {
        	var response= $http.post(projectUrl+'sweb/teamRest/deleteTeamMember/'+id).then(handleSuccess, handleError('Error getting user by username')).then(function (restResponse) {
          	  var response;
             
          	  if (restResponse.success) {
          	
          		  response = { success: true ,message:""};
              } else {
            	  
                  response = { success: false ,message:""};
              } 
              callback(response);
              
             
          });
           
        }
        
        
        
        function updateByColumn(table,id,column,value,type,callback){
        	var response= $http.post(projectUrl+'sweb/profileRest/updateByColumn'+'/'+table+'/'+column+'/'+id+'/'+value+'/'+type).then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
                callback(restResponse);
            });
          	
              
          	return response;
          }
        
        
        function  updateCertification(certification,callback){
        	

        	var restResponse= $http.put(projectUrl+'sweb/certificationRest/update',certification).then(handleSuccess, handleError('Error')).then(function (restResponse) {
          	  var response;
              if (restResponse.success) {
                  response = { success: true ,message:" Edit Succesfully"};
              } else {
            	  
                  response = { success: false ,message:" Error Editing"};
              }
             callback(restResponse);
        	
              return restResponse;
          });
           
         
        	
        }

        function get(id) {
            return $http.get(projectUrl+'sweb/profileRest/get/' + id).then(handleSuccess, handleError('Error getting all users'));
        }
        
        // getting user details
        
        function getMapGeoCoardinates(adressForGeoCoardinates,callback) {
        	$http.get('http://maps.google.com/maps/api/geocode/json?address='+adressForGeoCoardinates+'&sensor=false').success(function(mapData) {
        		callback( mapData);
        	    });
        }
        
      
        
        
        function getProfileByUserId(userId,callback) {
        	var response= $http.get(projectUrl+'sweb/profileRest/getProfile/' + userId).then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            
        	return response;
        }
        
        function getEavPicturesWithType(profileId,Type,callback) {
      	var response= $http.post(projectUrl+'sweb/pictureRest/getEavPicturesWithType/' + profileId+'/'+Type).then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
                callback(restResponse);
          });
        	
            
        	return response;
        	
        	
        	
        	
        	
        	
        	
        	
        	/*var returnHtml = {};
			jQuery.ajax({
				url : projectUrl+'sweb/pictureRest/getEavPicturesWithType/' + profileId+'/'+Type,
				type: "POST",
				
				async : false,
				cache : false,
				dataType : "json",
				success : function(html) {
					returnHtml = html;
				}
			});
			return returnHtml;*/
        	
        	
        	
        	
        	
        	
        	
        	
        }
        
        
        
        function getProfileByEmailId(userEmail,callback) {
        	var response= $http.post(projectUrl+'sweb/profileRest/getProfileByEmailId', '{"email":"'+userEmail+'"}').then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            
        	return response;
        }
        
        function getProfileByUserName(userName) {
			var returnHtml = {};
			jQuery.ajax({
				url : projectUrl+'sweb/profileRest/getProfileByUserName/'+userName		,
				async : false,
				cache : false,
				dataType : "json",
				success : function(html) {
					returnHtml = html;
				}
			});
			return returnHtml;
        }
        
        
        function getProfileUpdateVo(userId,callback) {
        	var response= $http.get(projectUrl+'sweb/profileRest/getProfileUpdateVo/' + userId
        			).then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            
        	return response;
        }
        
        
        //old
        function getPictureByType (miscellaneousDataType,referenceId,callback) {
        	var response= $http.post(projectUrl+'sweb/pictureRest/getPictureByType/' + referenceId,miscellaneousDataType).then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            return response;
        }
        
        

		    function companyAutosuggest(query) {

			var returnHtml = {};
			jQuery.ajax({
				url : projectUrl + 'sweb/companyAutosugestRest/getAllCompanies/'
						+ 0 + '/' + 20+ '?q=' + query,
				async : false,
				cache : false,
				dataType : "json",
				success : function(html) {
					returnHtml = html;
				}
			});
			return returnHtml;
		}
		    
		    
		    
		    
		    function countryAutoSuggest(query) {

				var returnHtml = {};
				jQuery.ajax({
					url : projectUrl + 'sweb/countryRest/getAllCountries/'
							+ -1 + '/' + 0+ '?q=' + query,
					async : false,
					cache : false,
					dataType : "json",
					success : function(html) {
						returnHtml = html;
					}
				});
				return returnHtml;
			}
		    
		    
		    // getting all specialization from specialization table 
		    
		    function specializationAutoSuggest(query) {

				var returnHtml = {};
				jQuery.ajax({
					url : projectUrl + 'sweb/specializationRest/getAllSpecializations/'
							+ -1 + '/' + 0+ '?q=' + query,
					async : false,
					cache : false,
					dataType : "json",
					success : function(html) {
						returnHtml = html;
					}
				});
				return returnHtml;
			}
        
        
        function getPath(pictureId,callback) {
        	var response= $http.get(projectUrl+'sweb/pictureRest/getPath/' + pictureId).then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            
        	return response;
        }
        
        
        

        function update(profile,callback) {
                    var response= $http.put(projectUrl+'sweb/profileRest/update/', profile).then(handleSuccess, handleError('Error Updating User')).then(function (restResponse) {
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
        // private functions
        

        function updateEavAttributes(profileId,prefix,eavAttributeSet,callback) {
                    var response= $http.post(projectUrl+'sweb/eavAttributeSetRest/update/'+profileId+'/'+prefix, eavAttributeSet).then(handleSuccess, handleError('Error Updating User')).then(function (restResponse) {
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
        
        
      	function updateDesc(picture,callback) {
            var response= $http.post(projectUrl+'sweb/pictureRest/updateDesc/', picture).then(handleSuccess, handleError('Error Updating User')).then(function (restResponse) {
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
        
        
        function getProfileVos(q,type,profileId,firstResult, maxResult,callback) {


/*			var returnHtml = {};
			jQuery.ajax({
				url : projectUrl+'sweb/profileRest/getProfileVos/'+profileId+'/'+firstResult+'/'+maxResult+'?q='+q,
				async : false,
				cache : false,
				dataType : "json",
				success : function(html) {
					returnHtml = html;
				}
			});
			return returnHtml;
		*/
        	
        	
        	var response= $http.get(projectUrl+'sweb/profileRest/getProfileVos/'+profileId+'/'+firstResult+'/'+maxResult+'?q='+q+'&type='+type).then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            return response;
        }
       
        
        function getGalleryPictureIds(userId,firstResult,maxResult,callback) {
        	var response= $http.post(projectUrl+'sweb/pictureRest/getGalleryPictureIds/'+userId+'/'+firstResult+'/'+maxResult).then(handleSuccess, handleError('Error getting user profile')).then(function (restResponse) {
              callback(restResponse);
          });
        	
            return response;
        }
        
       
        

        function handleSuccess(data) {
            return data.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        };
    };

})();
