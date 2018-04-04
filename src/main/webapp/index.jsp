<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<meta http-equiv="Page-Enter"
	content="revealTrans(Duration=10.0,Transition=1)">


<meta name="author" content="Binay Pani" />
<meta property="og:url" content="{{ngMeta['og:url']}}" />
<meta property="og:description" content="{{ngMeta['og:description']}}" />
<meta property="og:title" content="{{ngMeta['og:title']}}" />
<meta property="og:image" content="{{ngMeta['og:image']}}" />







<link rel="icon" href="img/KH_Symbol.png">

<link
	href="${pageContext.request.contextPath}/build/styles/framework-styles.css?v=1.4"
	rel="stylesheet">

<%-- <link rel="stylesheet" href="${pageContext.request.contextPath}/css/jquery.orgchart.min.css"> --%>


<link
	href="${pageContext.request.contextPath}/build/styles/styles.css?v=1.4"
	rel="stylesheet">


<base href="/aylaconnectweb/">

</head>




<body id="{{loginBodyIncluded}}">




	<div class="container">
		<div id="loading-bar-container"></div>
		<div ng-show="shouldHeaderBeIncluded && !isServiceProvider" ng-include="'header.html'"></div>
		<div ng-show="!shouldHeaderBeIncluded  && !isServiceProvider"
			ng-include="'publicHeader.html'"></div>
		<div ng-show="isServiceProvider"
			ng-include="'sp_public_header.html'"></div>
			 


		<div ng-view></div>

		<script
			src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCkCdx2rZN8C_UmJLsh997mWwkR8590IeU"></script>




		<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-105706134-1', 'auto');
  ga('send', 'pageview');

</script>





		<script
			src="${pageContext.request.contextPath}/build/scripts/frameworks.js?v=1.9"></script>


		<script src="https://www.google.com/jsapi?ext.js"></script>


		<script
			src="${pageContext.request.contextPath}/js/angular-google-chart.js"></script>
		<script src="${pageContext.request.contextPath}/js/ngMeta.js"></script>







		<%-- 	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.orgchart.min.js"></script> --%>



		<script
			src="${pageContext.request.contextPath}/js/angular-socialshare.js?v=2.0"></script>
		<script
			src="${pageContext.request.contextPath}/src/scripts/app-services/config.js?v=1.2"></script>

		<script type="text/javascript"
			src="${pageContext.request.contextPath}/src/scripts/app-services/filter.js?v=1.3"></script>

		<script
			src="${pageContext.request.contextPath}/src/scripts/app.js"></script>


		<script
			src="${pageContext.request.contextPath}/src/scripts/app-services/flash.service.js?v=1.2"></script>

		<script
			src="${pageContext.request.contextPath}/src/scripts/app-services/fileUpload.service.js?v=1.4"></script>

		<script
			src="${pageContext.request.contextPath}/src/scripts/js/satellizer.min.js?v=1.2"></script>

		<script
			src="${pageContext.request.contextPath}/src/scripts/js/common.messages.js?v=1.2"></script>

		<script
			src="${pageContext.request.contextPath}/src/scripts/app-services/valformaUtil.js?v=1.9"></script>



		<%--	<script
			src="${pageContext.request.contextPath}/build/scripts/script.js?v=2.2"></script> --%>
		<script
			src="${pageContext.request.contextPath}/src/scripts/app-services/common.service.js?v=1.2"></script>
		<script
			src="${pageContext.request.contextPath}/src/scripts/app-services/authentication.service.js?v=1.3"></script>


		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/changePassword.controller.js?v=1.3"></script>

		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/resetPassword.controller.js?v=1.3"></script>
		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/user.controller.js?v=1.3"></script>
		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/confirmEmail.controller.js?v=1.3"></script>

		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/failure.controller.js?v=1.1"></script>
		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/forgotPassword.controller.js?v=1.4"></script>
		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/login.controller.js"></script>


		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/home.controller.js?v=1.9"></script>


		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/publicHeader.controller.js?v=2.0"></script>
		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/header.controller.js?v=2.0"></script>

		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/alerts.controller.js?v=1.9"></script>

		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/implicitLogin.controller.js?v=1.9"></script>

		<script
			src="${pageContext.request.contextPath}/src/scripts/app-controllers/spalerts.controller.js?v=1.9"></script>
		<script>
			angular.module('app').filter('unsafe', function($sce) {
				return $sce.trustAsHtml;
			});
			$(window).load(function() {
				var toggle = false;
				var user = "jQuery404";
				var searchBoxText = "Type here...";
				var fixIntv;
				var fixedBoxsize = $('#fixed').outerHeight() + 'px';
				var Parent = $("#fixed"); // cache parent div
				var Header = $(".fixedHeader"); // cache header div
				var Chatbox = $(".userinput"); // cache header div
				Parent.css('height', '30px');

				Header.click(function() {
					toggle = (!toggle) ? true : false;
					if (toggle) {
						Parent.animate({
							'height' : fixedBoxsize
						}, 300);
					} else {
						Parent.animate({
							'height' : '30px'
						}, 300);
					}

				});
			});
		</script>






	</div>
</body>
</html>
