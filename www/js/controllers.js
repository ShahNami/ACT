angular.module('ACT.controllers', ['ionic', 'ui.router'])

.controller('LoginCtrl', function($scope, $ionicPopup, $state, $ionicPlatform) {
	$ionicPlatform.registerBackButtonAction(function (event) {  //exits the app when back button is pressed
		ionic.Platform.exitApp();
	}, 100);
	if (localStorage.getItem('logins') != null && localStorage.getItem("firstrun") != null) {
		$state.go('tab.map');
	}
	$scope.options = ['Nederlands','English']; 
	$scope.doLogin = function(){
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
			if(localStorage.getItem("firstrun") == null){
				localStorage.setItem('firstrun', "true");
				$state.go('scroll');
			} else {
				$state.go('tab.map');
			}
		}
	};
})


.controller('MapCtrl', function($scope, $state, Maps) {
	if(localStorage.getItem('logins') == null) {
		$state.go('login');
	} else if(localStorage.getItem("firstrun") == null){
		$state.go('scroll');
	}
    $scope.map = Maps.get();
})


.controller('ScrollCtrl', function($scope, $state) {
	if (localStorage.getItem("firstrun") == null) {
		localStorage.setItem('firstrun', "true");
	}
})


.controller('OverviewCtrl', function($scope, $ionicPopup, $state, Questions) {
	var randomNum = Math.floor((Math.random() * 3)); //3 monuments for the moment
	$scope.questions = Questions.get(randomNum); 
	$scope.startQuiz = function(){
		$state.go("quiz");
	}

	$scope.checkAnswer = function(questionId, choice){
		localStorage.setItem("Questionset["+randomNum+"]["+questionId+"]", choice == Questions.get(randomNum)[questionId].answer);
	};

	$scope.submitAnswers = function(){
		var count = 0;
		$state.go("tab.overview");
		for(i=0;i<3;i++){
			console.log(localStorage.getItem("Questionset["+randomNum+"]["+i+"]"));
			if(localStorage.getItem("Questionset["+randomNum+"]["+i+"]") == "true"){
				count++;
			}
		}
		$scope.showAlert = function() {
			var alertPopup = $ionicPopup.alert({
				title: '<h4>Your score</h4>',
				template:'<center>Your score is: ' + count + '/3</center>',
				buttons : [ {
					text : 'OK',
					type : 'button-calm'
				} ]
			});
		}
		$scope.showAlert();
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
