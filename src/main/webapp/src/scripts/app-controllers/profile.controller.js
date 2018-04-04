(function() {
	'use strict';

	angular.module('app').controller('ProfileController', ProfileController);

	ProfileController.$inject = [ '$location', 'ProfileService', 'UserService','ProfileExpService','PrivacySettingsService','QualificationService','MessagesService','AwardsService','CompanySpecializationService',
			'EavAttributeSetService', 'ActivityStreamService', 'FlashService','PersonaMasterService',
			'$scope', '$rootScope', '$routeParams', 'FollowService', '$http',
			'FriendService', 'fileUpload','$cookieStore'];
	function ProfileController($location, ProfileService, UserService,ProfileExpService,PrivacySettingsService,QualificationService,MessagesService,AwardsService,CompanySpecializationService,
			EavAttributeSetService, ActivityStreamService, FlashService,PersonaMasterService,
			$scope, $rootScope, $routeParams, FollowService, $http,
			FriendService, fileUpload, $cookieStore)
	{
		var profileController = this;

		profileController.acceptRequest = acceptRequest;
		profileController.update = update;
		profileController.follow = follow;
		profileController.galleryPictureIds={};
		profileController.sendRequest = sendRequest;
		profileController.rejectRequest = rejectRequest;
		profileController.galleryUploadFile=galleryUploadFile;
		profileController.multipartFilesYouAreUploading=[];
		profileController.getGalleryPictures=getGalleryPictures;
		profileController.user={};
		
		profileController.updateUserPersonaId=updateUserPersonaId
		
		
		profileController.getPersonaByPersonaId=getPersonaByPersonaId;
		
		profileController.getSpecializationByCompanyId=getSpecializationByCompanyId;
		profileController.specializations={};
		
		
		profileController.personaMasters={};
		
		
		profileController.updateExp=updateExp;
		profileController.updateAwards=updateAwards;
		profileController.updateQualification=updateQualification;
		profileController.updateSpecialization=updateSpecialization;
		profileController.getPersona=getPersona;
		profileController.onPersonaChange= onPersonaChange;
		
		profileController.uploadAwardFile=uploadAwardFile;
        
        
		profileController.isFollowing = false;

		profileController.saveMessage = saveMessage;
		profileController.profile = {};
		profileController.awards={};
		profileController.profileExp={};
		/*if($rootScope.globals.currentUser.id== undefined){
			$rootScope.globals.currentUser.id=$routeParams.userId;
			
		}*/
		
		

		if ($routeParams.userId != null && $routeParams.userId != $rootScope.globals.currentUser.id) {
			profileController.userId = $routeParams.userId;

			$('#profile-like').hide();
			$scope.edit="false";// education, exp, awards edit button
			/*$('#imgInp').hide(); // for hidding profile img upload
			$('#profilebtn').hide(); // for hidding profile img upload button
*/			$(".pichide").hide(); // for hidding profile img upload
			$('.imgbtn').hide(); // for hidding profile img upload button
           $scope.update_profile="false";
           $('#contact-message').show();
		} 
		else {

			profileController.userId = $rootScope.globals.currentUser.id;
			$scope.update_profile="true";
			$('#contact-message').hide();
			$scope.edit="true";// education, exp, awards edit button
		}
	

		(function initController() {
			
			getGalleryPictures();
			getSpecializationByCompanyId();
			getPersona();
			getPersonaByPersonaId();
			
		
			/* getting all profile exps from Profile Exp for user  Start */
			
			ProfileExpService.getProfileExpByUserId(profileController.userId, function (response) {
				profileController.profileExps=response;
				if(response)
					{
			     profileController.profileExps.forEach(function(profileExpSingle) {
			              	    
								/* pictureView */
								
								if (profileExpSingle.currentProfilePictureId != null) {
									profileExpSingle.picture = projectUrl
											+ 'sweb/pictureRest/viewPicture/'
											+ profileExpSingle.currentProfilePictureId;
								} 
								/* pictureView */
			               	
			                	});
					}
			});
			
			/* getting all Qualifications from qualification for User */
			
			QualificationService.getQualificationByUserId(profileController.userId, function (response) {
				profileController.allQualifications=response;
			    
			});
			
		/* getting all Awards from awards table for User */
			
			AwardsService.getAwardsByUserId(profileController.userId, function (response) {
				profileController.allAwards=response;
				
				if(response)
				{
						profileController.allAwards.forEach(function(singleAward) {
		              	    
							/* pictureView */
							
							if (singleAward.currentAwardPictureId != null) {
								singleAward.picture = projectUrl
										+ 'sweb/pictureRest/viewPicture/'
										+ singleAward.currentAwardPictureId;
							} 
							/* pictureView */
		               	
		                	});
				}
			    
			});
			
			
			
			/*followvo*/
			/*FollowService
					.getFollowVo(
							$rootScope.globals.currentUser.id,
							function(response) {
								profileController.following = response;
								if (profileController.following.currentProfilePictureId != null) {
									profileController.following.picture = projectUrl
											+ 'sweb/pictureRest/viewPicture/'
											+ profileController.follower.currentProfilePictureId;
								} else {
									profileController.following.picture = "img/defaultprofile.png";
								}
							});followvo*/
			
			
			
			/*for PRofile Search*/
			getProfileByUserId();
			 var searchObject = $location.search();
			ProfileService.getProfileVos(searchObject.q,-1,0, function(response) {
				profileController.profiles=response;
				profileController.profiles.forEach(function(profile) {
              	    
					/* pictureView */
				
					if (profile.currentPictureId != null) {
						
						profile.picture = projectUrl
								+ 'sweb/pictureRest/viewPicture/'
								+ profile.currentPictureId;
					} else
						profile.picture = "img/defaultprofile.png";
					/* pictureView */
               	
                	});
            
          	   
          	});
			
			
			function getProfileByUserId(){
				
				
				
				ProfileService.getProfileUpdateVo(profileController.userId, function(response) {
							profileController.profile = response;
							var mydate = new Date(profileController.profile.dob);
							profileController.profile.dob=mydate.toLocaleString();
							if(profileController.profile.dob=="1/1/1970, 5:30:00 AM")
								{
									profileController.profile.dob="";
								}
							else
								{
									profileController.profile.dob=mydate;
								}
							profileController.searchCountryText=profileController.profile.country;
							
							 //profileController.profile.country=profileController.searchCountryText;
							
							$('.note-editable').html(profileController.profile.aboutUs);
							/* pictureView */
							if (profileController.profile.currentProfilePictureId != null) {
								profileController.profile.profilePicture = projectUrl
										+ 'sweb/pictureRest/viewPicture/'
										+ profileController.profile.currentProfilePictureId;
							} else
								profileController.profile.profilePicture = "img/defaultprofile.png";
							/* pictureView */

						});
			}
			
			
			/*
			 * pictureView
			 * 
			 * ProfileService.viewPicture(profileController.profile.currentProfilePictureId,function(response) {
			 * profileController.ProfilePicture=response; });
			 * 
			 * pictureView
			 */

			/* To Get EAV Attribiute SET Values */

		/*	EavAttributeSetService.search('{}', -1, 0, function(response) {
				profileController.eavAttributeSets = response;
			});

			
			     EavAttributeSetService.getCompleteTree(profileController.profile.eavAttributeId,function(response) {
						profileController.profile.eavAttributeSet = response;
					});*/
			
			
			

			// Start getting no of posts by user id
			ActivityStreamService.getNoOfPostsByUserId(
					profileController.userId, function(response) {
						profileController.userPosts = response;
					});

			// end

			/* is following */
			if ($routeParams.userId != null
					&& $routeParams.userId != $rootScope.globals.currentUser.id) {

				FollowService.isFollowing($rootScope.globals.currentUser.id,
						$routeParams.userId, function(response) {
							profileController.isFollowing = response;
							if (profileController.isFollowing) {
								profileController.followbutton = "Unfollow";
							} else {
								profileController.followbutton = "Follow";
							}
						});
			} else {
				$('#follow').hide();
				$('.follow_container').hide();
			} /* is following end */

			/* is friend start */
			if ($routeParams.userId != null
					&& $routeParams.userId != $rootScope.globals.currentUser.id) {

				// friendController.button="ADD FRIEND";
				FriendService
						.isFriend(
								$rootScope.globals.currentUser.id,
								$routeParams.userId,
								function(response) {
									profileController.isFriend = response;
									if (profileController.isFriend) {
										profileController.FriendButton = "Friends";
									} else {
										profileController.FriendButton = "Send Request";
									}
								});
			} else {
				$('.friendbutton').hide();
			}

			/* is friend end */

			/* is he requested me to be his friend */
			if ($routeParams.userId != null
					&& $routeParams.userId != $rootScope.globals.currentUser.id) {

				// friendController.button="ADD FRIEND";
				FriendService
						.isFriendRequestSent(
								$routeParams.userId,
								$rootScope.globals.currentUser.id,
								function(response) {
									profileController.isFriendRequestSent = response;
									if (profileController.isFriendRequestSent) {
										profileController.acceptButton = "Accept Request ";
										profileController.rejectButton = "Reject Request";

									}
								});

			} else {
				$('#friend').hide();
			}
			/* is friend end */

			// reset login status
			// UserService.ClearCredentials();
			UserService.getUserDetailsByUserId(profileController.userId, function(
					response) {
				profileController.userDetails = response;
			});
			
			// code for getting privacy settings 
			
			profileController.privacySettingSearch={};
			profileController.privacySettingSearch.userId=$routeParams.userId;
			if($routeParams.userId!=null)
        	{
			
			PrivacySettingsService.getAllSettings(profileController.privacySettingSearch, -1, 0,function (response) {
        		profileController.allSettings=response;
        		
        	
        		profileController.allSettings.forEach(function(singleSetting) {
	              	    
						/* pictureView */
        			if (singleSetting.settingType=="EMAIL"){
        			
        			    $scope.showEmail=PrivacySettingsService.getSingleSetting(singleSetting,profileController.isFriend);
        			}
        			else if (singleSetting.settingType=="MOBILE"){
            			
        			    $scope.showMobile=PrivacySettingsService.getSingleSetting(singleSetting,profileController.isFriend);
        			}
        			else if (singleSetting.settingType=="DOB"){
            			
        			    $scope.showDob=PrivacySettingsService.getSingleSetting(singleSetting,profileController.isFriend);
        			}
						
						
	               });
        		

        	});
    			
        	}
        	else
        		{
	        		$scope.showEmail=true;
	    			$scope.showMobile=true;
	    			$scope.showDob=true;
        		}
        	
        	
        	
			
			
			
		})();

		
		function saveMessage() {
			profileController.dataLoading = true;
			profileController.singleMessage.fromUser = $rootScope.globals.currentUser.id;
			profileController.singleMessage.toUser = $routeParams.userId;
			profileController.singleMessage.sentDate = new Date();

			MessagesService.save(profileController.singleMessage,
					function(response) {
						$("#contact-message-blk").toggle();
						if (response.success) {
							// AuthenticationService.SetCredentials(vm.username,
							// vm.password);
							response = {
								success : true
							};
							// $location.path('/');

						} else {
							FlashService.Error(response.message);
							profileController.dataLoading = false;
						}
					});

		}

		/* follow start */
		function follow() {
			FollowService.save($rootScope.globals.currentUser.id,
					$routeParams.userId, function(response) {


			
						if (response.success) {
							
							if (profileController.followbutton == "Follow")
								{
								profileController.userDetails.noOfFollowers++;
								profileController.followbutton = "Unfollow";
								}
							else{
								profileController.userDetails.noOfFollowers--;
								profileController.followbutton = "Follow";
							}
							response = {
								success : true
							};
						} else {
							FlashService.Error(response.message);
							profileController.dataLoading = false;
						}

					});
		}
		;/* follow end */

		/* friend start */
		function acceptRequest(specializationId) {
			
			if(specializationId==undefined){
				specializationId=0;
			}
			
			
			FriendService.save($rootScope.globals.currentUser.id,
					
					
					
					$routeParams.userId,specializationId, function(response) {
				    
				UserService
				.getUserDetailsByUserId(
						profileController.userId,
						function(response) {
							profileController.userDetails = response;
						});

						

						if (response.success) {
							profileController.isFriendRequestSent = false;
							profileController.FriendButton = "Friends";

							if(profileController.followbutton == "Follow"){
								profileController.followbutton = "Unfollow";
								}

						} else {
							FlashService.Error(response.message);
							profileController.dataLoading = false;
						}

					});

		}
		;/* friend end */

		/* reject start */
		function rejectRequest() {
			FriendService.rejectRequest($rootScope.globals.currentUser.id,
					$routeParams.userId, function(response) {

						

						if (response.success) {
							profileController.isFriendRequestSent = false;
							profileController.FriendButton = "Send Request";

						} else {
							FlashService.Error(response.message);
							profileController.dataLoading = false;
						}

					});

		}
		;/* reject end */

		/* sent request start */
		function sendRequest(specializationId) {
			
			if (specializationId==undefined){
				specializationId=0;
			}

			if (profileController.FriendButton == "Send Request") {
           
			
				

				FriendService
						.sendRequest(
								$rootScope.globals.currentUser.id,
								$routeParams.userId,specializationId,
								function(response) {

								/*	UserService
											.getUserDetailsByUserId(
													profileController.userId,
													function(response) {
														profileController.userDetails = response;
													});*/
								
									
								
								
									if (response.success) {
										if(profileController.followbutton == "Follow"){
											profileController.userDetails.noOfFollowers++;
											profileController.followbutton = "Unfollow";
											}
										
										profileController.FriendButton = "Request Sent";
										
										response = {
											success : true
										};
									} else {
										FlashService.Error(response.message);
										profileController.dataLoading = false;
									}

								});
			}
		}
		;/* sent request end */

		/* profile Upadte */
		function update() {
			profileController.dataLoading = true;
			
			profileController.profile.aboutUs = $('#summercontent').summernote('code');
			
			profileController.profile.userId=profileController.userId;
			
			if(profileController.profile.selectedCountryItem!==null)
    		{
    		   profileController.profile.countryId=profileController.profile.selectedCountryItem.id;
    		   profileController.profile.country=profileController.profile.selectedCountryItem.countryName;
    		}
    		else
    		{
    		  profileController.profile.countryName=profileController.searchCountryText;
    		}
			ProfileService.update(profileController.profile,
					
					
					function(response) {
				
						$("#profile-like-blk").toggle();
						if (response.success) {
							//window.location.reload();
							// AuthenticationService.SetCredentials(vm.username,
							// vm.password);
							response = {
								success : true
							};
						

						} else {
							FlashService.Error(response.message);
							profileController.dataLoading = false;
						}
					});

		} /* profile Upadte */

		$scope.uploadFile = function() {
			var file = $scope.myFile;
			console.log('file is ');
			console.dir(file);

			var uploadUrl = projectUrl + "sweb/pictureRest/myUpload/profile/"
					+ profileController.profile.id;
			fileUpload.uploadFileToUrl(file, uploadUrl, function (response){
				
					var picturepath="";
					/* pictureView */
					if (response!= -1) {
						picturepath = projectUrl
								+ 'sweb/pictureRest/viewPicture/'
								+ response;
					} else
						{
						picturepath = "img/defaultprofile.png";
						}
					/* pictureView */
					
				  
			            $rootScope.globals.currentUser.profilePicture=picturepath;
			            //$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
			            $cookieStore.put('globals', $rootScope.globals);
			            profileController.profile.currentProfilePictureId=response;
					
				  // var authdata = Base64.encode(firstName + ':' + password);
	           
	        
			});
			

			/*
			 * ProfileService.getProfileByUserId(profileController.userId,
			 * function (response) { profileController.profile=response;
			 * profileController.profile.dob=new
			 * Date(profileController.profile.dob); pictureView
			 * 
			 * if (profileController.profile.currentProfilePictureId!=null){
			 * profileController.profile.profilePicture=projectUrl+'sweb/pictureRest/viewPicture/'+profileController.profile.currentProfilePictureId; }
			 * else
			 * profileController.profile.profilePicture="img/defaultprofile.png";
			 * });
			 */

		

		};

		/* Profile Exp save in profile Exp Service  Start Code*/
		
		// getting values to update form
		$scope.profileEdit= function profileEdit(profileExpId) {
			
			$("#exp-pos").hide();
			
			$("#exp-pos-blk").toggle();
			
			ProfileExpService.get(profileController.profileExp,profileExpId,function (response) {
				profileController.profileExp=response;
				var startdate = new Date(
						profileController.profileExp.fromDate);
				profileController.profileExp.fromDate=startdate;
				
				var enddate = new Date(
						profileController.profileExp.toDate);
				profileController.profileExp.toDate=enddate;
			/*	
				if(response.companyId!=null)
					{
				profileController.profileExp.selectedItem='{"userId":'+response.companyId+',"name":"'+response.company+'"}';
					}*/
				profileController.searchText=profileController.profileExp.company;
      		 
			});
		
		};
		
        function updateExp() {

        	profileController.dataLoading = true;
        	
        	// update 
        if(profileController.profileExp.id!=null)
        {
		        	profileController.profileExp.userId=profileController.userId;
		        	if(profileController.profileExp.selectedItem !=undefined && profileController.profileExp.selectedItem!==null)
		        		{
		        		   profileController.profileExp.companyId=profileController.profileExp.selectedItem.userId;
		        		   profileController.profileExp.company=profileController.profileExp.selectedItem.name;
		        		}
		        		else
		        		{
		        		  profileController.profileExp.company=profileController.searchText;
		        		}
		        	
		        	ProfileExpService.update(profileController.profileExp, function (response) {
		        		
		        		ProfileExpService.getProfileExpByUserId(profileController.userId, function (response) {
		        			profileController.profileExp={};
		            		profileController.profileExps=response;
		            		
		            		 profileController.profileExps.forEach(function(profileExpSingle) {
				              	    
									/* pictureView */
									
									if (profileExpSingle.currentProfilePictureId != null) {
										profileExpSingle.picture = projectUrl
												+ 'sweb/pictureRest/viewPicture/'
												+ profileExpSingle.currentProfilePictureId;
									} 
									/* pictureView */
				               	
				                	});
		            		 $("#exp-pos-blk").toggle();
		            		 $("#exp-pos").show();
		              });
		            	
		                 if (response.success) {
		                   //  AuthenticationService.SetCredentials(vm.username, vm.password);
		                 	 response = { success: true };
		                     $location.path('/profile');
		                 } else {
		                	 $location.path('/');
		                	 FlashService.Error(response.message);
		                     profileController.dataLoading = false;
		                }
		            });
        }
        else
        	{
        	
			        	profileController.profileExp.userId=profileController.userId;
			        	if(profileController.profileExp.selectedItem!==null)
			        		{
			        		   profileController.profileExp.companyId=profileController.profileExp.selectedItem.userId;
			        		   profileController.profileExp.company=profileController.profileExp.selectedItem.name;
			        		}
			        		else
			        		{
			        		  profileController.profileExp.company=profileController.searchText;
			        		}
			        	
			        	  ProfileExpService.save(profileController.profileExp, function (response) {
			        		
			        		ProfileExpService.getProfileExpByUserId(profileController.userId, function (response) {
			        			profileController.profileExp={};
			            		profileController.profileExps=response;
			            		
			            		 profileController.profileExps.forEach(function(profileExpSingle) {
					              	    
										/* pictureView */
										
										if (profileExpSingle.currentProfilePictureId != null) {
											profileExpSingle.picture = projectUrl
													+ 'sweb/pictureRest/viewPicture/'
													+ profileExpSingle.currentProfilePictureId;
										} 
										/* pictureView */
					               	
					                	});
			            		 $("#exp-pos-blk").toggle();
			            		 $("#exp-pos").show();
			              });
			            	
			                 if (response.success) {
			                   //  AuthenticationService.SetCredentials(vm.username, vm.password);
			                 	 response = { success: true };
			                     $location.path('/profile');
			                 } else {
			                	 $location.path('/');
			                	 FlashService.Error(response.message);
			                     profileController.dataLoading = false;
			                }
			            });
        	
        	}
        
        
        };
		
		
		/* Qualification save in qualification Service  Start Code*/
		
		// getting values to update form
		$scope.qualificationEdit= function qualificationEdit(qualificationId) {
			$("#qual-pos").hide();
			$("#qual-pos-blk").toggle();
			
			QualificationService.get(profileController.qualification,qualificationId,function (response) {
				profileController.qualification=response;
				var startdate = new Date(
						profileController.qualification.startDate);
				profileController.qualification.startDate=startdate;
				
				var enddate = new Date(
						profileController.qualification.endDate);
				profileController.qualification.endDate=enddate;
				profileController.searchSchoolText=profileController.qualification.schoolName;
				profileController.searchFieldText=profileController.qualification.fieldName;
				profileController.searchUniversityText=profileController.qualification.universityName;
			});
		
		};
		
        function updateQualification() {

        	profileController.dataLoading = true;
        	
        	// update 
        if(profileController.qualification.id!=null)
        {
		        	profileController.qualification.userId=profileController.userId;
		        	if(profileController.profileExp.selectedItem !=undefined && profileController.qualification.selectedSchoolItem!==null)
	        		{
	        		   profileController.qualification.schoolId=profileController.qualification.selectedSchoolItem.id;
	        		   profileController.qualification.schoolName=profileController.qualification.selectedSchoolItem.name;
	        		}
	        		else
	        		{
	        		  profileController.qualification.schoolName=profileController.searchSchoolText;
	        		}
		        	
		        	if(profileController.profileExp.selectedItem !=undefined && profileController.qualification.selectedFieldItem!==null)
	        		{
	        		   profileController.qualification.fieldId=profileController.qualification.selectedFieldtem.id;
	        		   profileController.qualification.fieldName=profileController.qualification.selectedFieldItem.fieldName;
	        		}
	        		else
	        		{
	        		  profileController.qualification.fieldName=profileController.searchFieldText;
	        		}
		        	
		        	if(profileController.profileExp.selectedItem !=undefined && profileController.qualification.selectedUniversityItem!==null)
	        		{
	        		   profileController.qualification.universityId=profileController.qualification.selectedUniversityItem.id;
	        		   profileController.qualification.universityName=profileController.qualification.selectedUniversityItem.name;
	        		}
	        		else
	        		{
	        		  profileController.qualification.universityName=profileController.searchUniversityText;
	        		}
		        	
		        	
		        	QualificationService.update(profileController.qualification, function (response) {
		        		
		        		QualificationService.getQualificationByUserId(profileController.userId, function (response) {
		        			profileController.qualification={};
		            		profileController.allQualifications=response;
		            		
		            		
		            		 $("#qual-pos-blk").toggle();
		            		 $("#qual-pos").show();
		              });
		            	
		                 if (response.success) {
		                   //  AuthenticationService.SetCredentials(vm.username, vm.password);
		                 	 response = { success: true };
		                     $location.path('/profile');
		                 } else {
		                	 $location.path('/');
		                	 FlashService.Error(response.message);
		                     profileController.dataLoading = false;
		                }
		            });
        }
        else
        	{
        	
			        	profileController.qualification.userId=profileController.userId;
			        	if(profileController.qualification.selectedSchoolItem!==null)
			        		{
			        		   profileController.qualification.schoolId=profileController.qualification.selectedSchoolItem.id;
			        		   profileController.qualification.schoolName=profileController.qualification.selectedSchoolItem.name;
			        		}
			        		else
			        		{
			        		  profileController.qualification.schoolName=profileController.searchSchoolText;
			        		}
			        	if(profileController.qualification.selectedFieldItem!==null)
		        		{
		        		   profileController.qualification.fieldId=profileController.qualification.selectedFieldItem.id;
		        		   profileController.qualification.fieldName=profileController.qualification.selectedFieldItem.fieldName;
		        		}
		        		else
		        		{
		        		  profileController.qualification.fieldName=profileController.searchFieldText;
		        		}
			        	
			        	if(profileController.qualification.selectedUniversityItem!==null)
		        		{
		        		   profileController.qualification.universityId=profileController.qualification.selectedUniversityItem.id;
		        		   profileController.qualification.universityName=profileController.qualification.selectedUniversityItem.name;
		        		}
		        		else
		        		{
		        		  profileController.qualification.universityName=profileController.searchUniversityText;
		        		}
			        	
			        	
			        	QualificationService.save(profileController.qualification, function (response) {
			        		
			        		QualificationService.getQualificationByUserId(profileController.userId, function (response) {
			        			profileController.qualification={};
			            		profileController.allQualifications=response;
			            		
			            		
			            		 $("#qual-pos-blk").toggle();
			            		 $("#qual-pos").show();
			              });
			            	
			                 if (response.success) {
			                   //  AuthenticationService.SetCredentials(vm.username, vm.password);
			                 	 response = { success: true };
			                     $location.path('/profile');
			                 } else {
			                	 $location.path('/');
			                	 FlashService.Error(response.message);
			                     profileController.dataLoading = false;
			                }
			            });
        	
        	}
        
        
        };
		
		// awards section //
        
		 /* Image upload */
		 $scope.fileOnChange = function readURL1(input) {
			 
			 
			 if (input.files && input.files[0]) {
			        var reader = new FileReader();
			        
			       /* reader.onload = function (e) {
			            $('#awardPic').attr('src', e.target.result);
			            
			            uploadAwardFile(e);
			        }*/
			        
			        reader.onload = (function(theFile) {
						
						return function(e) {
							//obj.src = e.target.result;
							
							$('#awardPic').attr('src', e.target.result);
							// if first upload || evertying thing uploaded and first uploaded
							uploadAwardFile(theFile);
							
							
							
							
						};
					})
							(input.files[0]);
					
			        
			        
			        
			        reader.readAsDataURL(input.files[0]);
			    }
	}
      
		 function uploadAwardFile(multipartFile) {
  			var file = multipartFile;
  
  			var uploadUrl = projectUrl + "sweb/pictureRest/myUploadWithoutRef/award";
  			fileUpload.uploadFileToUrl(file, uploadUrl, function (response){
  				
  					/* pictureView */
  					if (response!= -1) {
  						
  						profileController.awardPictureId=response;
  						
  						  
  						  return "uploadSuccesFully";
  					} else
  						{
  						return "uploadFail";
  						
  						}
  					/* pictureView */
  			});
  			
  		};
     
		/*// getting values to update form
		$scope.awardEdit= function awardEdit(awardId) {
			
			$("#award-pos").hide();
			
			$("#award-pos-blk").toggle();
			
			AwardsService.get(profileController.award,awardId,function (response) {
				profileController.award=response;
				var startdate = new Date(profileController.award.issuedDate);
				profileController.award.issuedDate=startdate;
      		 
			});
		
		};*/
		
        function updateAwards() {

        	profileController.awards.dataLoading = true;
        	
        	// update 
        if(profileController.award.id!=null)
        {
		        	profileController.award.userId=profileController.userId;
		        	
			        	AwardsService.update(profileController.award, function (response) {
			        		
			        		AwardsService.getAwardsByUserId(profileController.userId, function (response) {
			        			profileController.award={};
			            		profileController.allAwards=response;
			            		
			            		
			            		$("#award-pos").show();
			        			
			        			$("#award-pos-blk").toggle();
			        			
			              });
		            	
		                 if (response.success) {
		                   //  AuthenticationService.SetCredentials(vm.username, vm.password);
		                 	 response = { success: true };
		                     $location.path('/profile');
		                 } else {
		                	 $location.path('/');
		                	 FlashService.Error(response.message);
		            
		                     profileController.awards.dataLoading = false;
		                }
		            });
        }
        else
        	{
        	
				        	profileController.award.userId=profileController.userId;
				        	profileController.award.pictureId=profileController.awardPictureId;
				        	AwardsService.save(profileController.award, function (response) {
				        		
				        		
				        		AwardsService.getAwardsByUserId(profileController.userId, function (response) {
				    				profileController.allAwards=response;
				    				
				    				if(response)
				    				{
				    						profileController.allAwards.forEach(function(singleAward) {
				    		              	    
				    							/* pictureView */
				    							
				    							if (singleAward.currentAwardPictureId != null) {
				    								singleAward.picture = projectUrl
				    										+ 'sweb/pictureRest/viewPicture/'
				    										+ singleAward.currentAwardPictureId;
				    							} 
				    							/* pictureView */
				    		               	
				    		                	});
				    				}
				    				$("#award-pos").show();
				        			
				        			$("#award-pos-blk").toggle();
				    			    
				    			});
				        		
			            	
			                 if (response.success) {
			                   //  AuthenticationService.SetCredentials(vm.username, vm.password);
			                 	 response = { success: true };
			                     $location.path('/profile');
			                 } else {
			                	 $location.path('/');
			                	 FlashService.Error(response.message);
			                 
			                     profileController.awards.dataLoading = false;
			                }
			            });
        	
        	}
        
        
        };
		
		// adding specialization
        
        function updateSpecialization() {

        	profileController.companySpecialization.dataLoading = true;
        	profileController.companySpecialization.companyId=$rootScope.globals.currentUser.id;
        	if(profileController.companySpecialization.selectedSpecializationItem!==null)
    		{
    		   profileController.companySpecialization.specializationId=profileController.companySpecialization.selectedSpecializationItem.id;
    		}
        	CompanySpecializationService.save(profileController.companySpecialization, function (response) {
        	
        		
        		if (response.success) {
        			
        			getSpecializationByCompanyId();
                    //  AuthenticationService.SetCredentials(vm.username, vm.password);
                  	 response = { success: true };
                      $location.path('/profile');
                  } else {
                 	 $location.path('/');
                 	 FlashService.Error(response.message);
                  
                      profileController.companySpecialization.dataLoading = false;
                 }
        	});
        	
        	

        }
        
    	
        function getPersona(){
        PersonaMasterService.search( $rootScope.globals.currentUser.personaId, function(response) {
        	profileController.personaMaster = response;
        	
        });
        }
        
        
        function getPersonaByPersonaId(){
        	 PersonaMasterService.get( $rootScope.globals.currentUser.personaId, function(response) {
             	profileController.singlePersonaMaster = response;
             	onPersonaChange(response,-1);
             });
        }
        
        
        function onPersonaChange(persona,index){
        	if(index!=-1)
    		{
    		for (var i = index+1; i < Object.keys(profileController.personaMastersMap).length; i++) { 
    			 delete profileController.personaMastersMap[i] ;
    		}
    		}
    		else{
    			profileController.personaMastersMap={}; 
    		}
        	var parentId=persona!=undefined?persona.id:undefined;
        	if(parentId!=undefined && persona.leaf!=1)
			{
        	PersonaMasterService.search( parentId, function(response) {
        		/*alert(parentId);
        		alert(userController.personaMastersMap.length);*/
        		
        		
        		
        		if(Object.keys(profileController.personaMastersMap).length==0){
        			profileController.personaMastersMap[0] = response;
        		}
        		else{
        			profileController.personaMastersMap[Object.keys(profileController.personaMastersMap).length] = response;
        		}
        		
        	});
			}
        }
        
        function updateUserPersonaId() {
        	profileController.dataLoading = true;
           
        //	alert( Object.keys(profileController.personaMastersMap).length);
        	
        	if( Object.keys(profileController.personaMastersMap).length>0)
            	{
            	profileController.user.personaId=profileController.personaValue[Object.keys(profileController.personaMastersMap).length-1].id;
            	}
            else{
            	profileController.user.personaId=profileController.user.basePersonaId.id;
            }
        	
        	profileController.user.id=$rootScope.globals.currentUser.id;
        	
           
        	UserService.updatePersonaId(profileController.user, function (response) {
                if (response.success) {
                  //  AuthenticationService.SetCredentials(vm.username, vm.password);
                	 /*response = { success: true,message:'Registered Successfully' };
                    $location.path('/login');*/
                    FlashService.Success('Saved Successfully',true);
                   // $location.path('/regsuccess');
                    /*response = { success: true };*/
                } else {
                    FlashService.Error(response.message);
                    profileController.dataLoading = false;
                }
            });
            
            
            
        };
        
        
        
        
        
        
        
        
        
        
        
        
        
        
		function getSpecializationByCompanyId(){
			
			CompanySpecializationService.getSpecializationByCompanyId($rootScope.globals.currentUser.id,-1,0,function(response){
				profileController.specializations=response;
			});
			
		}
		
		
		
		
		
		// code for company auto suggest

		profileController.simulateQuery = false;
		profileController.isDisabled = false;

	    // list of `state` value/display objects
		
		profileController.querySearch = querySearch;
		profileController.selectedItemChange = selectedItemChange;
	    profileController.searchTextChange = searchTextChange;

	    profileController.newState = newState;

	    function newState(state) {
	      alert("Sorry! You'll need to create a Constituion for " + state + " first!");
	    }

	    // ******************************
	    // Internal methods
	    // ******************************

	    /**
	     * Search for states... use $timeout to simulate
	     * remote dataservice call.
	     */
	    profileController.response123={};
	    function pausecomp(millis)
	    {
	     var date = new Date();
	     var curDate = null;
	     do { curDate = new Date(); }
	     while(curDate-date < millis);
	   }
	    function querySearch(query) {
	    	    	
	    	return ProfileService.companyAutosuggest(query) ;
	    
	    	
	    }

	    function searchTextChange(text) {
	      console.log('Text changed to ' + text);
	    }

	    function selectedItemChange(item) {
	    	  console.log('Item changed to ' + JSON.stringify(item));
	    }

	  

		
		
		// code for country auto suggest

		profileController.simulateCountryQuery = false;
		profileController.isCountryDisabled = false;

	    // list of `state` value/display objects
		
		profileController.queryCountrySearch = queryCountrySearch;
		profileController.selectedCountryItemChange = selectedCountryItemChange;
	    profileController.searchCountryTextChange = searchCountryTextChange;

	    profileController.newCountryState = newCountryState;

	    function newCountryState(state) {
		      alert("Sorry! You'll need to create a country for " + state + " first!");
		    }

		    // ******************************
		    // Internal methods
		    // ******************************

		    /**
		     * Search for states... use $timeout to simulate
		     * remote dataservice call.
		     */
		    profileController.response456={};
		    function pausecomp(millis)
		    {
		     var date = new Date();
		     var curDate = null;
		     do { curDate = new Date(); }
		     while(curDate-date < millis);
		   }
		    function queryCountrySearch(queryCountry) {
		    	    	
		       var response= ProfileService.countryAutoSuggest(queryCountry) ;
		      
		    	
		    	
		    
		    	
		    }

		    function searchCountryTextChange(text) {
		      console.log('Text changed to ' + text);
		    }

		    function selectedCountryItemChange(itemCountry) {
		    	  console.log('Item changed to ' + JSON.stringify(itemCountry));
		    }
	    
	    
	    
		    
		    
		    
		    
		    
	    // code for school auto suggest

		profileController.simulateSchoolQuery = false;
		profileController.isSchoolDisabled = false;

	    // list of `state` value/display objects
		
		profileController.querySchoolSearch = querySchoolSearch;
		profileController.selectedSchoolItemChange = selectedSchoolItemChange;
	    profileController.searchSchoolTextChange = searchSchoolTextChange;

	    profileController.newSchoolState = newSchoolState;

	    function newSchoolState(state) {
	      alert("Sorry! You'll need to create a School for " + state + " first!");
	    }

	    // ******************************
	    // Internal methods
	    // ******************************

	    /**
	     * Search for states... use $timeout to simulate
	     * remote dataservice call.
	     */
	    profileController.response23={};
	    function pausecomp(millis)
	    {
	     var date = new Date();
	     var curDate = null;
	     do { curDate = new Date(); }
	     while(curDate-date < millis);
	   }
	    function querySchoolSearch(querySchool) {
	    	    	
	    	return QualificationService.schoolAutosuggest(querySchool) ;
	    
	    	
	    }

	    function searchSchoolTextChange(text) {
	      console.log('Text changed to ' + text);
	    }

	    function selectedSchoolItemChange(itemSchool) {
	    	  console.log('Item changed to ' + JSON.stringify(itemSchool));
	    }
	   
	   
	    
	    
	    
	    // code for getting all degrees
	    
	    QualificationService.degreeSearch('{}', -1, 0, function(response) {
			profileController.allDegrees = response;
		});
	    

	 // code for degree auto suggest

		profileController.simulateFieldQuery = false;
		profileController.isFieldDisabled = false;

	    // list of `state` value/display objects
		
		profileController.queryFieldSearch = queryFieldSearch;
		profileController.selectedFieldItemChange = selectedFieldItemChange;
	    profileController.searchFieldTextChange = searchFieldTextChange;

	    profileController.newFieldState = newFieldState;

	    function newFieldState(state) {
	      alert("Sorry! You'll need to create a Field of Study for " + state + " first!");
	    }

	    // ******************************
	    // Internal methods
	    // ******************************

	    /**
	     * Search for states... use $timeout to simulate
	     * remote dataservice call.
	     */
	    profileController.response34={};
	    function pausecomp(millis)
	    {
	     var date = new Date();
	     var curDate = null;
	     do { curDate = new Date(); }
	     while(curDate-date < millis);
	   }
	    
	    function queryFieldSearch(queryField,degreeId) {
	    	    	
	    		return QualificationService.fieldAutosuggest(queryField,degreeId) ;
	    
	    	
	    }

	    function searchFieldTextChange(text) {
	      console.log('Text changed to ' + text);
	    }

	    function selectedFieldItemChange(itemField) {
	    	  console.log('Item changed to ' + JSON.stringify(itemField));
	    }
	    
	    
//	    function onDegreeChange(degreeId)
//	    {
//	    	alert(degreeId);
//	    	return QualificationService.fieldAutosuggest(degreeId) ;
//	    }
//	    
	 // code for university auto suggest

		profileController.simulateUniversityQuery = false;
		profileController.isUniversityDisabled = false;

	    // list of `state` value/display objects
		
		profileController.queryUniversitySearch = queryUniversitySearch;
		profileController.selectedUniversityItemChange = selectedUniversityItemChange;
	    profileController.searchUniversityTextChange = searchUniversityTextChange;

	    profileController.newUniversityState = newUniversityState;

	    function newUniversityState(state) {
	      alert("Sorry! You'll need to create a University for " + state + " first!");
	    }

	    // ******************************
	    // Internal methods
	    // ******************************

	    /**
	     * Search for states... use $timeout to simulate
	     * remote dataservice call.
	     */
	    profileController.response34={};
	    function pausecomp(millis)
	    {
	     var date = new Date();
	     var curDate = null;
	     do { curDate = new Date(); }
	     while(curDate-date < millis);
	   }
	    function queryUniversitySearch(queryUniversity) {
	    	    	
	    	return QualificationService.universityAutosuggest(queryUniversity) ;
	    }

	    function searchUniversityTextChange(text) {
	      console.log('Text changed to ' + text);
	    }

	    function selectedUniversityItemChange(itemUniversity) {
	    	  console.log('Item changed to ' + JSON.stringify(itemUniversity));
	    }
	    
	/*  ###########################################################################################################################     */
	    
	 // code for specialization auto suggest

		profileController.simulateSpecializationQuery = false;
		profileController.isSpecializationDisabled = false;

	    // list of `state` value/display objects
		
		profileController.querySpecializationSearch = querySpecializationSearch;
		profileController.selectedSpecializationItemChange = selectedSpecializationItemChange;
	    profileController.searchSpecializationTextChange = searchSpecializationTextChange;

	    profileController.newSpecializationState = newSpecializationState;

	    function newSpecializationState(state) {
	      alert("Sorry! You'll need to create a Constituion for " + state + " first!");
	    }

	    // ******************************
	    // Internal methods
	    // ******************************

	    /**
	     * Search for states... use $timeout to simulate
	     * remote dataservice call.
	     */
	    profileController.response123={};
	    function pausecomp(millis)
	    {
	     var date = new Date();
	     var curDate = null;
	     do { curDate = new Date(); }
	     while(curDate-date < millis);
	   }
	    function querySpecializationSearch(querySpecialization) {
	    	    	
	    	return ProfileService.specializationAutoSuggest(querySpecialization) ;
	    
	    	
	    }

	    function searchSpecializationTextChange(text) {
	      console.log('Text changed to ' + text);
	    }

	    function selectedSpecializationItemChange(itemSpecialization) {
	    	  console.log('Item changed to ' + JSON.stringify(itemSpecialization));
	    }

	    
	    
		/*  ###########################################################################################################################     */
	    
	    
	    
	    /* Gallery  upload */
		 $scope.galleryFileOnChange = function readURL2(input) {
var totalNoOfFiles = profileController.multipartFilesYouAreUploading.length;
var i = totalNoOfFiles;
if (input.files) {
	for (var j = 0; j < input.files.length; j++) {

		profileController.multipartFilesYouAreUploading[i
				+ j] = {};
		profileController.multipartFilesYouAreUploading[i
				+ j].src = "";
		profileController.multipartFilesYouAreUploading[i
				+ j].file = "";
		var reader = new FileReader();
		
		reader.onload = (function(theFile, obj,j,length) {
			obj.abc="";
			return function(e) {
				obj.src = e.target.result;
				galleryUploadFile(obj.file,j,length);
				
				profileController.multipartFilesYouAreUploading=[];	
				
				
				// if first upload || evertying thing uploaded and first uploaded
				
				
				
				
				
				
			};
		})
				(input.files[j],
						profileController.multipartFilesYouAreUploading[i
								+ j],j,(input.files.length-1));
		
		
		profileController.multipartFilesYouAreUploading[i
				+ j].file = input.files[j];
		reader.readAsDataURL(input.files[j]);

	}
	
	

}

}

function getGalleryPictures()
{
	ProfileService.getGalleryPictureIds($rootScope.globals.currentUser.id,-1,0,function (response){
		profileController.galleryPictureIds=response;
		
		
		profileController.galleryPictureIds.pictures=[];
		
		
		
		 profileController.galleryPictureIds.forEach(function(galleryPicture) {
       	    
				/* pictureView */
				
				if (galleryPicture.galleryPictureId != null) {
					galleryPicture.pictures = projectUrl
							+ 'sweb/pictureRest/viewPicture/'
							+ galleryPicture.galleryPictureId;
				} 
				/* pictureView */
        	
         	});
		
	});
}



		 
		 function galleryUploadFile(multipartFiles,index,length) {
  			var file = multipartFiles;
  			console.log('file is ');
  			console.dir(file);
  			var uploadUrl = projectUrl + "sweb/pictureRest/myUpload/gallery/"+$rootScope.globals.currentUser.id;
  			fileUpload.uploadFileToUrl(file, uploadUrl, function (response){
  					/* pictureView */
  					if (response!= -1) {
  						if(index==length)
  						{
  						$scope.message="Uploaded Successfully";
  						getGalleryPictures();
  						
  						}
  						 // uploadFile(nextFile);
  						  //activityStreamController.pictureIds.push(response);
  						 response = { success: true,message:'Uploaded Successfully' };
  						  //return "uploadSuccesFully";
  						   
  						  /*activityStreamController.multipartFilesYouAreUploading = projectUrl
  								+ 'sweb/pictureRest/viewPicture/'
  								+ response;
  						  activityStreamController.multipartFilesYouAreUploading.push(response);*/
  					} else
  						{
  						return "uploadFail";
  						
  						}
  					/* pictureView */
  			});
  			
  		};


		
	    
	    
	    
	    
	    
	    
		
	
	
	
	}
	
	
	
	
})();


