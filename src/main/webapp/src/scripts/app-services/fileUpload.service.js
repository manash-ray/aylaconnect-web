
(function () {
    'use strict';
   var basePath="";
    angular
        .module('app')
        .factory('fileUpload', fileUpload);


    fileUpload.$inject = ['$http'];
    
    
    function fileUpload($http) {
    	
    	
    	var service = {};
    	
    	service.uploadFileToUrl=uploadFileToUrl;
    	service.uploadFileToUrlWithIndex=uploadFileToUrlWithIndex;
    	service.uploadBase64FileToUrl =uploadBase64FileToUrl;
    	service.uploadProfilePic =uploadProfilePic;
    	return service;
    	
    	
    	function uploadFileToUrl(file, uploadUrl, callback){
            var fd = new FormData();
            fd.append('file', file);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
            .success(function(response){
            	callback(response);
            })
            .error(function(){
            });
        }
    	
    	function uploadFileToUrlWithIndex(file, uploadUrl,j, callback){
            var fd = new FormData();
            fd.append('file', file);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
            .success(function(response){
            	callback(response,j);
            })
            .error(function(){
            });
        }
    	function uploadProfilePic(uploadUrl,picturedata, callback){
            var fd = new FormData();
          //  fd.append('file', file);
            
            fd.append('pictureId', picturedata.pictureId);
            fd.append('pictureName',picturedata.pictureName)
            fd.append('x', picturedata.x);
            fd.append('y', picturedata.y)
            fd.append('width', picturedata.width);
            fd.append('height', picturedata.height)
            $http.post(uploadUrl,fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }  )
            .success(function(response){
            	callback(response);
            })
            .error(function(){
            });
        }
    	
     	
    	function uploadBase64FileToUrl(file, fileName, uploadUrl, callback){
            var fd = new FormData();
            fd.append('file', file);
            fd.append('fileName', fileName);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
            .success(function(response){
            	callback(response);
            })
            .error(function(){
            });
        }
    	
    	
  
 
    	
    	
    	
    	
    	    	
    
    
    }
    
    
     	

    
    
    
    
    
    })();
    	
    	
    
    
    
    


/*app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }*/

