angular.module('ACT.controllers', ['ionic', 'ui.router'])

.controller('LoginCtrl', function($scope, $ionicPopup, $state, $ionicPlatform) {
	$ionicPlatform.registerBackButtonAction(function (event) {  //exits the app when back button is pressed
		ionic.Platform.exitApp();
	}, 100);
	if (localStorage.getItem('logins') != null) {
		$state.go('tab.map');
	}
	$scope.options = ['Nederlands','English']; 
	$scope.doLogin = function(){
		console.log("Clicked");
		if(!$scope.login.name || !$scope.login.email || !$scope.login.checked){
			$scope.showAlert = function() {
				var alertPopup = $ionicPopup.alert({
					title: '<h3>Error</h3>',
					template:'Check your input fields please.',
					buttons : [ {
						text : 'OK',
						type : 'button-assertive'
					} ]
				});
			}
			$scope.showAlert();
		} else{
			localStorage.setItem('logins', JSON.stringify($scope.login));
			$state.go('tab.map');
		}
	};
})


.controller('MapCtrl', function($scope, $state, Maps) {
	if(localStorage.getItem('logins') == null) {
		$state.go('login');
	}
    $scope.map = Maps.get();
})

.controller('OverviewCtrl', function($scope, $state) {
	if(localStorage.getItem('logins') == null) {
		$state.go('login');
	}
	
})

.controller('AchievementsCtrl', function($scope, Achievements) {
  $scope.achievements = Achievements.all();
  $scope.remove = function(achievement) {
    Achievements.remove(achievement);
  }
})

.controller('AchievementDetailCtrl', function($scope, $stateParams, Achievements) {
  $scope.achievement = Achievements.get($stateParams.achievementId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true,
	enableHighscore: true
  };
});
