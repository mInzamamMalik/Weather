/**
 * Created by malikasinger on 19/08/2015.
 */
angular.module("starter")

  .controller('homeController', function ($scope, $http, $ionicLoading, $ionicSideMenuDelegate, $ionicPopup, $timeout) {


    // Triggered on a button click, or some other target
    $scope.showPopup = function () {

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        title: 'Saylani Weather App',
        subTitle: '<b>devloped by:</b> ' +
        '<br />' +
        ' Inzamam Malik ' +
        '<br /><br />' +
        '<b>Credits</b>:' +
        '<br />' +
        'All Credit Of This App Goes To My Parents First And Then Sir Zia, Taha Bhai & Saylani Mass Training Platform.' +
        '<br /><br />' +
        '<b>Tested:</b>' +
        '<br />' +
        'This app is tested on Android 4.4 and found working fine' +
        '<br /><br />' +
        '<b>Contact</b>:' +
        '<br />' +
        'malikasinger@gmail.com' +
        '<br />' +
        'facebook.com/malikasinger' +
        '<br />'
      });
      myPopup.then(function (res) {
        console.log('Tapped!', res);
      });
      $timeout(function () {
        myPopup.close(); //close the popup after 5 seconds for some reason
      }, 5000);
    };

    $scope.toggleLeft = function () {
      $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.cityname = "";
    $scope.showHideContent = false;
    var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];


    $scope.search = function (cityname) {
      $scope.weather = '';
      $ionicLoading.show();
      $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&APPID=901d672d14c778eefb41af3fd3871f1f").then(
        function (weather) {

          console.log("this is response", weather);
          $scope.weather = weather.data;
          $ionicLoading.hide();
          $scope.showHideContent = true;
          $scope.cityname = "";
          cordova.plugins.Keyboard.close();

        },
        function (error) {
          console.log("this is err", error);

          $scope.showHideContent = false;
          $ionicLoading.show({
            template: "Could not load weather update" +
            "<br>" +
            "<i class='calm'>kindly check internet connection.</i>",
            duration: 3000
          });
        });//ended get
    };








    $scope.getDirection = function (degree) {
      if (degree > 338) {
        degree = 360 - degree;
      }
      var index = Math.floor((degree + 22) / 45);
      return directions[index];
    }



  });


//http://api.openweathermap.org/data/2.5/weather?q=pk&APPID=901d672d14c778eefb41af3fd3871f1f
//http://api.openweathermap.org/data/2.5/weather?q=pk&APPID=901d672d14c778eefb41af3fd3871f1f

