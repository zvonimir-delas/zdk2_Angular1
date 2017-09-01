angular.module('myApp').config(function($stateProvider){
    $stateProvider
    .state('home',{
        url: '/',
        controller: 'homeController',
        template: 'home.partial.html'
    })
})