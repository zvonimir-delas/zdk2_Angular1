angular.module('myApp').config(function($stateProvider){

    $stateProvider
    .state('home',{
        url: '/',
        controller: 'homeController',
        template: `
            <h1>Welcome to the imenik</h1>
            <button ui-sref="listAll">Load all students</button>
        `
    })
})