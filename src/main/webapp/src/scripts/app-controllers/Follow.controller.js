(function () {
    'use strict';

    angular
        .module('app')
        .controller('FollowController', FollowController);

    FollowController.$inject = ['$location', 'FollowService', 'FlashService'];
    function FollowController($location, FollowService, FlashService) {
        var followController = this;

        followController.save = save;

        (function initController() {
            // reset login status
            //AuthenticationService.ClearCredentials();
        })();

        function save() {
        	followController.dataLoading = true;
        	FollowService.save(followController.follow, function (response) {
            	
                 if (response.success) {
                   //  AuthenticationService.SetCredentials(vm.username, vm.password);
                	 alert("hello");
                 	 response = { success: true };
                     $location.path('/');
                 } else {
                	 $location.path('/');
                	 FlashService.Error(response.message);
                     followController.dataLoading = false;
                }
            });
        };
    }

})();




