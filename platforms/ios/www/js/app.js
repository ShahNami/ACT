// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ACT', ['ionic', 'ACT.controllers', 'ACT.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    //db = $cordovaSQLite.openDB("act.db");
    //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS questions (id integer primary key, mid integer foreign key, question text, answer text)");
    //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS monuments (id integer primary key, name text, description text)");
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })

  .state('scroll', {
    url: '/scroll',
    templateUrl: 'templates/scroll.html'
  })

  .state('quiz', {
    url: '/quiz',
    templateUrl: 'templates/quiz.html'
  })
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'templates/tab-map.html',
        controller: 'MapCtrl'
      }
    }
  })

  .state('tab.overview', {
    url: '/overview',
    views: {
      'tab-overview': {
        templateUrl: 'templates/tab-overview.html',
        controller: 'OverviewCtrl'
      }
    }
  })

  .state('tab.achievements', {
      url: '/achievements',
      views: {
        'tab-achievements': {
          templateUrl: 'templates/tab-achievements.html',
          controller: 'AchievementsCtrl'
        }
      }
    })
    .state('tab.achievement-detail', {
      url: '/achievements/:achievementId',
      views: {
        'tab-achievements': {
          templateUrl: 'templates/achievement-detail.html',
          controller: 'AchievementDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/map');

});
