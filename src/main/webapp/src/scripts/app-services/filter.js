

angular.module('appFilters', []).filter('startFrom', function() {
	return function(input, start) {
		start = +start; //parse to 
		return input.slice(start);
	};
});

angular.module('numbersOnly', []).directive('numbersOnly', function() {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9-+]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

angular.module('orgChart', []).directive('orgChart', function () {
    function link($scope, element, attrs) {
        var chart = new google.visualization.OrgChart(element[0]);
        $scope.$watch('chartData', function (value, oldvalue) {
            if (!value) {
                return;
            }
            var data = google.visualization.arrayToDataTable(value);
            var options = {
                'title': '',
                'allowHtml': true
            }
            
            for (var i = 0; i < data.getNumberOfRows(); i++) {
                chart.collapse(i, true);
              }
            chart.draw(data, options);
            
          
            
        })
    }
    return {
        link: link
    };
})




/* directive for entering numbers only */
/*angular.module('numbersOnly', []).directive('numbersOnly', function() {
	return {
		require : 'ngModel',
		scope : {
			numbersOnly : '='
		},
		link : function(scope, element, attrs, ngModelCtrl) {
			scope.numbersOnly = attrs.numbersOnly;
			function fromUser(text) {
				if (text && attrs.numbersOnly == 'wholeNumber') {
					var transformedInput = text.replace(/[^0-9]/g, '');

					if (transformedInput !== text) {
						ngModelCtrl.$setViewValue(transformedInput);
						ngModelCtrl.$render();
					}
					return transformedInput;
				}

				return undefined;
			}
			ngModelCtrl.$parsers.push(fromUser);
		}
	};
});*/
/*myApp.filter('unsafe', function($sce) { return $sce.trustAsHtml; });*/

angular.module('fupApp', []).directive('fileModel',
		[ '$parse', function($parse) {
			return {
				restrict : 'A',
				link : function(scope, element, attrs) {
					var model = $parse(attrs.fileModel);
					var modelSetter = model.assign;

					element.bind('change', function() {
						scope.$apply(function() {
							modelSetter(scope, element[0].files[0]);
						});
					});
				}
			};
		} ]);

/*angular.module('directive.ehref', []).config(function($locationProvider){
 this['directive.ehref'] = $locationProvider;
 }).directive('ehref', function(){
 var config = this['directive.ehref'];
 return function($scope, $element, $attrs){
 if(config.html5Mode() === true){
 $element.context.href = $attrs.ehref.replace('#' + config.hashPrefix(), '');
 return;
 };
 $element.context.href = $attrs.ehref;
 };
 });
 */

angular.module("CKEditorExample", []).directive('ckEditor', function() {
	return {
		require : '?ngModel',
		link : function(scope, elm, attr, ngModel) {
			var ck = CKEDITOR.replace(elm[0]);
			if (!ngModel)
				return;
			ck.on('instanceReady', function() {
				ck.setData(ngModel.$viewValue);
			});
			function updateModel() {
				scope.$apply(function() {
					ngModel.$setViewValue(ck.getData());
				});
			}
			ck.on('change', updateModel);
			ck.on('key', updateModel);
			ck.on('dataReady', updateModel);

			ngModel.$render = function(value) {
				ck.setData(ngModel.$viewValue);
			};
		}
	};
});
angular.module("dateParser", []).directive('moDateInput', function($window) {
	return {
		require : '^ngModel',
		restrict : 'A',
		link : function(scope, elm, attrs, ctrl) {
			var moment = $window.moment;
			var dateFormat = attrs.moMediumDate;
			attrs.$observe('moDateInput', function(newValue) {
				if (dateFormat == newValue || !ctrl.$modelValue)
					return;
				dateFormat = newValue;
				ctrl.$modelValue = new Date(ctrl.$setViewValue);
			});

			ctrl.$formatters.unshift(function(modelValue) {
				scope = scope;
				if (!dateFormat || !modelValue)
					return "";
				var retVal = moment(modelValue).format(dateFormat);
				return retVal;
			});

			ctrl.$parsers.unshift(function(viewValue) {
				scope = scope;

				return new Date(viewValue);
				//var date = moment(viewValue, dateFormat);
				//return (date && date.isValid() && date.year() > 1950 ) ? date.toDate() : "";
			});
		}
	};
});
angular.module("HIGHERTHAN", []).directive(
		'higherThan',
		[ function() {

			var link = function($scope, $element, $attrs, ctrl) {

				var validate = function(viewValue) {
					var comparisonModel = $attrs.higherThan;

					if (!viewValue || !comparisonModel) {
						// It's valid because we have nothing to compare against
						ctrl.$setValidity('higherThan', true);
					}

					// It's valid if model is lower than the model we're comparing against
					ctrl.$setValidity('higherThan',
							parseInt(viewValue, 10) > parseInt(comparisonModel,
									10));
					return viewValue;
				};

				ctrl.$parsers.unshift(validate);
				ctrl.$formatters.push(validate);

				$attrs.$observe('higherThan', function(comparisonModel) {
					// Whenever the comparison model changes we'll re-validate
					return validate(ctrl.$viewValue);
				});

			};

			return {
				require : 'ngModel',
				link : link
			};

		} ]);

angular
		.module('YEARDROPDOWN', [])
		.directive(
				'yearDrop',
				function() {
					function getYears(startingYear, range) {

						var startignYearParsed = parseInt(startingYear, 10);

						var years = []

						var currentYear = new Date().getFullYear();

						for (var i = startignYearParsed; i < currentYear
								+ range; i++) {
							years.unshift(i);
						}

						return years;
					}
					return {

						restrict : 'A',
						scope : {
							bindModel : '=ngModel'
						},
						link : function(scope, element, attrs) {
							scope.years = getYears(+attrs.startingYear,
									+attrs.range);
							scope.selected = scope.years[0];
						},
						/*    template: '<select class="wc-form-control text-center width100pc" ng-model="ngModel" ng-options="y for y in years"></select>'*/
						template : '<option value="">Years</option><option ng-selected="y==bindModel" ng-repeat="y in years">{{y}}</option>'
					};
				});
