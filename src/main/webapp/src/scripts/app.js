(function() {
	'use strict';

	/*dependency injections for angularjs */
	/*define your own directives in filter.js and define here*/
	var app = angular.module('app', [ 'ngResource', 'ngMessages', 'ui.router',
			'ngRoute', 'ngSanitize', 'appFilters', 'ngCookies',
			'infinite-scroll', 'fupApp', 'ngMaterial', 'CKEditorExample',
			'ngAnimate', 'ui.bootstrap', 'dateParser', 'angular-loading-bar',
			'HIGHERTHAN', 'YEARDROPDOWN', 'satellizer', 'xeditable', 'toastr',
			'vsGoogleAutocomplete', 'ngMap', 'numbersOnly',
			'720kb.socialshare', 'googlechart', 'orgChart', 'ngMeta' ]);

	app.config(config).run(run);

	/* dependency injections for config function */
	config.$inject = [ '$routeProvider', '$locationProvider',
			'$mdThemingProvider', 'cfpLoadingBarProvider', '$authProvider',
			'ngMetaProvider' ];

	/*config function for application*/
	function config($routeProvider, $locationProvider, $mdThemingProvider,
			cfpLoadingBarProvider, $authProvider, ngMetaProvider) {

		/*threshhold latency for loading bar */
		/*define delay of loading bar after xhr request is send */
		cfpLoadingBarProvider.latencyThreshold = 100;

		ngMetaProvider
				.setDefaultTag('og:url', 'http://www.ayalaconnect.com/home');
		ngMetaProvider.setDefaultTag('og:image',
				'http://www.ayalaconnect.com/img/shareImage.png');
		ngMetaProvider
				.setDefaultTag('og:description',
						'A System provides easy and smooth entry into Institutes and Schools');
		ngMetaProvider.setDefaultTag('og:title', 'ayalaconnect');

		/*depending on the url the route will redirect to a particular html  */
		/*define route variable and route params here to use in your view and controller  */
		$routeProvider
				.when(
						'/',
						{
							templateUrl : 'home.html?v=1.5',
							data : {
								meta : {
									'og:image' : 'http://www.ayalaconnect.com/img/kh_logo_new.png',
									'og:description' : 'A System provides easy and smooth entry into Institutes and Schools',
									'og:title' : 'ayalaconnect'
								}
							}

						})
				.when(
						'/home',
						{
							templateUrl : 'home.html?v=1.5',

							data : {
								meta : {
									'og:image' : 'http://www.ayalaconnect.com/img/kh_logo_new.png',
									'og:description' : 'A System provides easy and smooth entry into Institutes and Schools',
									'og:title' : 'ayalaconnect'
								}
							}

						})
				.when('/regsuccess', {
					templateUrl : 'regsuccess.html'
				})
				.when('/test', {
					templateUrl : 'test.html'
				})
				.when('/forgotPassword', {
					templateUrl : 'forgotPassword.html'
				})
				.when('/confirmEmail', {
					templateUrl : 'confirmEmail.html'
				})
				.when('/resetPassword', {
					templateUrl : 'resetPassword.html'
				})
				.when('/changePassword', {
					templateUrl : 'changePassword.html'
				})
				.when('/serviceProvider', {
					templateUrl : 'sp_global_tel_support.html'
				})
				.when('/deviceDetails', {
					templateUrl : 'sp_viewalert.html'
				})
				.when('/home', {
					templateUrl : 'home.html?v=1.4'

				})

				
				.when('/alerts', {
					templateUrl : 'alerts.html',

				})
				.when('/viewalert', {
					templateUrl : 'viewalert.html',

				})
				.when('/alertsettings', {
					templateUrl : 'alertsettings.html',

				})
				.when('/manageusers', {
					templateUrl : 'staffs.html',

				})
				.when('/newalert', {
					templateUrl : 'newalert.html',

				})
				.when('/newstaff', {
					templateUrl : 'newstaff.html',

				})
				.when('/failure', {
					templateUrl : 'failure.html',

				})

				

				.when('/pageNotFound', {
					templateUrl : 'pageNotFound.html'
				})

				.when('/pageInDevelopment', {
					templateUrl : 'pageInDevelopment.html'
				})

				
				.when(
						'/:userId',
						{
							templateUrl : 'CommonProfile.html?v=1.0',
							isUserName : true,
							profilePage : true,

							data : {
								meta : {
									'title' : 'Home page',
									'description' : 'This is the description shown in Google search results'
								}
							}

						})

				

				.otherwise({
					redirectTo : '/home'
				});

		/*for removal of # symbol from url  */
		$locationProvider.html5Mode({
			enabled : true,

		});

		/*takes client id from config.js */
		$authProvider.facebook({
			clientId : facebook_client_id
		});

		$authProvider.google({
			clientId : google_client_id
		});

	}

	/*dependency injection for application run function*/
	run.$inject = [ '$rootScope', '$location', '$http', '$cookieStore',
			'editableOptions', '$route', '$window', 'ngMeta', '$templateCache' ];

	function getCookie(key) {
		var list = [];
		var all = document.cookie;
		if (all) {
			list = all.split('; ');
		}

		var cookies = {};
		var hasCookies = false;

		for (var i = 0; i < list.length; ++i) {
			if (list[i]) {
				var cookie = list[i];
				var pos = cookie.indexOf('=');
				var name = cookie.substring(0, pos);
				var value = cookie.substring(pos + 1);
				if (angular.isUndefined(value))
					continue;

				if (key === undefined || key === name) {
					try {
						cookies[name] = JSON.parse(value);
					} catch (e) {
						cookies[name] = value;
					}
					if (key === name) {
						return cookies[name];
					}
					hasCookies = true;
				}
			}
		}
		if (hasCookies && key === undefined) {
			return cookies;
		}
	}

	/*application run function*/
	function run($rootScope, $location, $http, $cookieStore, editableOptions,
			$route, $window, ngMeta, $templateCache) {

		editableOptions.theme = 'bs3';
		// keep user logged in after page refresh

		$window.ga('create', 'UA-XXXXXXXX-X', 'auto');

		var loggedIn = getCookie('access_token') || localStorage.access_token;

		
		/*routescope global variable declaration*/

		$rootScope.globals = getCookie('globals') || {};
		localStorage.setItem("access_token", getCookie('access_token'));

		$rootScope.profileDetails = {};

		if (loggedIn
				&& ($location.path() == '/home' || $location.path() == '/')) {
			$location.path('/alerts');
		}
		if($location.path() == '/serviceProvider' || $location.path() == '/deviceDetails'){		
			$rootScope.isServiceProvider = true;
		}

		/*fires on every location change*/
		$rootScope.$on('$locationChangeStart', function(event, next, current) {

			$window.ga('send', 'pageview', $location.path());

			loggedIn = localStorage.access_token;
			if(loggedIn == 'undefined'){
				loggedIn = false;
			}

			var nonRestrictedPage = true;
			$.each([ '/changePassword', '/alerts', '/alertsettings','/manageusers','newstaff', 'newalert', 'viewalert',
					'/success' ], function(index, value) {

				if ($location.path() == value) {
					nonRestrictedPage = false;

				}
			});

			$('#loginModal').modal('hide');
			$('#perfdiagnomodal').modal('hide');
			$('.modal-backdrop').hide();
			$("body").css("overflow", "auto");

			/*for these url headers are not included*/
			if($location.path() == '/serviceProvider' || $location.path() == '/deviceDetails'){		
				$rootScope.isServiceProvider = true;
				$rootScope.loginBodyIncluded = 'kh';
			}
			else if ($location.path() == '/home' || $location.path() == '/'
					|| $location.path() == '/forgotPassword'
					|| $location.path() == '/resetPassword'
					|| $location.path() == '/facebook'
					|| $location.path() == '/confirmEmail'
					|| $location.path() == '/regsuccess' || !loggedIn) {

				$rootScope.shouldHeaderBeIncluded = false;
				$rootScope.loginBodyIncluded = 'startpage';
				$rootScope.isServiceProvider = false;
			} else {
				$rootScope.shouldHeaderBeIncluded = true;
				$rootScope.loginBodyIncluded = 'kh';
				$rootScope.isServiceProvider = false;
			}

			/*if it is a non restricted page and user is not logged in */
			/*user will be redirected to login page  */
			if (!nonRestrictedPage && !loggedIn) {
				$location.path('/home');

			}

			ngMeta.init();

			$route.reload();
		});
	}

})()