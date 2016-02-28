var map;
var markers = [];
function init_map(lat, lng) {
  map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: new google.maps.LatLng(lat, lng),
      type: "ROADMAP"
  });
}
function get_position() {
  var coords = {};
  navigator.geolocation.getCurrentPosition(function(position){
      coords.lat = position.coords.latitude;
      coords.lng = position.coords.longitude;
    	init_map(coords.lat, coords.lng);
  });
  return coords;
}




angular.module('ionicApp', ['ionic'])
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
      })
      .state('tabs.home', {
          url: "/home",
          views: {
              'home-tab': {
                  templateUrl: "templates/home.html",
                  controller: 'HomeTabCtrl'
              }
          }
      })
       .state('tabs.news-inside', {
          url: "/news-inside",
          views: {
              'home-tab': {
                  templateUrl: "templates/news-inside.html"
              }
          }
      })
        .state('tabs.facts', {
          url: "/facts",
          views: {
              'home-tab': {
                  templateUrl: "templates/facts.html"
              }
          }
      })
      .state('tabs.facts2', {
          url: "/facts2",
          views: {
              'home-tab': {
                  templateUrl: "templates/facts2.html"
              }
          }
      })
      .state('tabs.announcements', {
          url: "/announcements",
          views: {
              'home-tab': {
                  templateUrl: "templates/announcements.html"
              }
          }
      })    
      .state('tabs.campuses', {
          url: "/campuses",
          views: {
              'home-tab': {
                  templateUrl: "templates/campuses.html"
              }
          }
      })  
 
        .state('tabs.calendar', {
          url: "/calendar",
          views: {
              'home-tab': {
                  templateUrl: "templates/calendar.html"
              }
          }
      })      
      .state('tabs.login', {
          url: "/login",
          views: {
              'home-tab': {
                  templateUrl: "templates/login.html"
              }
          }
      })
      .state('tabs.about', {
          url: "/about",
          views: {
              'about-tab': {
                  templateUrl: "templates/about.html"
              }
          }
      })
      .state('tabs.todo', {
          url: "/todo",
          views: {
              'todo-tab': {
                  templateUrl: "templates/todo.html"
              }
          }
      })    
      .state('tabs.messages', {
          url: "/messages",
          views: {
              'about-messages': {
                  templateUrl: "templates/announcements.html"
              }
          }
      })
      .state('tabs.navstack', {
          url: "/navstack",
          views: {
              'about-tab': {
                  templateUrl: "nav-stack.html"
              }
          }
      })
      .state('tabs.contact', {
          url: "/contact",
          views: {
              'contact-tab': {
                  templateUrl: "contact.html"
              }
          }
      })
      .state('tabs.search', {
          url: '/search',
          views: {
              'home-tab': {
                  templateUrl: 'search.html'
              }
          }
      })
    
    
        .state('tabs.map1', {
    	url: '/map1',
    	views: {
        'home-tab': {
          templateUrl: 'templates/map1.html',
          controller: 'Map1Ctrl'
        }
      }
  })
    
 
 

 
 
 
    
      .state('tabs.settings', {
          url: '/settings',
          views: {
              'home-tab': {
                  templateUrl: 'templates/settings.html'
              }
          }
      });





    $urlRouterProvider.otherwise("/tab/home");
//    $urlRouterProvider.otherwise("/tab/home");


})
.controller('NavCtrl', function ($scope, $ionicSideMenuDelegate, $ionicPopup, $ionicHistory, $timeout) {
    $scope.showLeftMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.showRightMenu = function () {
        $ionicSideMenuDelegate.toggleRight();
    };

    //open popup with backview title when hold on back navigation button
    $scope.showBackViewTitle = function () {
        var myPopup = $ionicPopup.alert({
            title: 'Back View Title',
            template: 'You are going to: ' + $ionicHistory.backTitle()
        });

        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });

        $timeout(function () {
            myPopup.close(); //close the popup after 2 seconds for some reason
        }, 2000);
    };

})
.controller('HomeTabCtrl', function ($scope) {
})



.controller('Map1Ctrl', function($scope, $state) {
    get_position();  
})

//.controller('Map2Ctrl', function($scope) {
//  get_position();
//});



.controller('CacheController', ['$scope', '$cacheFactory', function($scope, $cacheFactory) {
  $scope.keys = [];
  $scope.cache = $cacheFactory('cacheId');
  $scope.put = function(key, value) {
    if (angular.isUndefined($scope.cache.get(key))) {
      $scope.keys.push(key);
    }
    $scope.cache.put(key, angular.isUndefined(value) ? null : value);
  };
}]);

