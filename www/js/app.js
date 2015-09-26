// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])



.config(function($stateProvider,$urlRouterProvider){

    $stateProvider
      .state("home",{
        url : "/home",
        templateUrl : "views/home/home.html",
        controller : "homeController"
      });

    $urlRouterProvider.otherwise("/home");
    })


.controller("appController",function($scope,$ionicSideMenuDelegate){



});
