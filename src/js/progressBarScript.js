var progressBarApp = angular.module('progressBar', []);
progressBarApp
		.controller(
				'progressBarCtrl',
				function($scope) {
					$scope.readonly = false;
					$scope.progress = 20;
					$scope.progressBar = "bar1";
					$scope.myRangeId = "myRange1";
					$scope.progressBarId = "progressBar1";

					$scope.progressVal1 = 20;
					$scope.progressVal2 = 20;
					$scope.progressVal3 = 20;

					$scope.chooseProgressBar = function() {
						var bar = $scope.item;
						if (bar == "bar1") {
							$scope.myRangeId = "myRange1";
							$scope.progressBarId = "progressBar1";
						} else if (bar == "bar2") {
							$scope.myRangeId = "myRange2";
							$scope.progressBarId = "progressBar2";
						} else if (bar == "bar3") {
							$scope.myRangeId = "myRange3";
							$scope.progressBarId = "progressBar3";
						} else {
							$scope.myRangeId = "myRange1";
							$scope.progressBarId = "progressBar1";
						}
					};

					$scope.stepUp = function(value) {
						document.getElementById($scope.myRangeId).stepUp(value);
						var progressTemp;
						if ($scope.myRangeId == "myRange1") {
							$scope.progressVal1 += value;
							progressTemp = $scope.progressVal1;
						} else if ($scope.myRangeId == "myRange2") {
							$scope.progressVal2 += value;
							progressTemp = $scope.progressVal2;
						} else if ($scope.myRangeId == "myRange3") {
							$scope.progressVal3 += value;
							progressTemp = $scope.progressVal3;
						}

						if (progressTemp >= 100) {
							document.getElementById($scope.progressBarId).className = "progress-bar-danger";
						} else {
							document.getElementById($scope.progressBarId).className = "progress-bar-fill";
						}
					};
					$scope.stepDown = function(value) {
						document.getElementById($scope.myRangeId).stepDown(
								value);
						var progressTemp;
						if ($scope.myRangeId == "myRange1") {
							$scope.progressVal1 -= value;
							if ($scope.progressVal1 < 0) {
								$scope.progressVal1 = 0;
							}
							progressTemp = $scope.progressVal1;
						} else if ($scope.myRangeId == "myRange2") {
							$scope.progressVal2 -= value;
							if ($scope.progressVal2 < 0) {
								$scope.progressVal2 = 0;
							}
							progressTemp = $scope.progressVal2;
						} else if ($scope.myRangeId == "myRange3") {
							$scope.progressVal3 -= value;
							if ($scope.progressVal3 < 0) {
								$scope.progressVal3 = 0;
							}
							progressTemp = $scope.progressVal3;
						}

						if (progressTemp > 100) {
							document.getElementById($scope.progressBarId).className = "progress-bar-danger";
						} else {
							document.getElementById($scope.progressBarId).className = "progress-bar-fill";
						}
					};
					$scope.barObject = {
						"bars" : [ {
							"Name" : "Progress Bar1",
							"Value" : "bar1"
						}, {
							"Name" : "Progress Bar2",
							"Value" : "bar2"
						}, {
							"Name" : "Progress Bar3",
							"Value" : "bar3"
						} ]
					};
					$scope.allBars = $scope.barObject.bars;

				});