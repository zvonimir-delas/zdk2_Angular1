var app = angular.module('myApp', ['LocalStorageModule', 'ui.router']);

app.run(function(localStorageService){
    if(!localStorageService.get('students'))
        localStorageService.set('students', [{name: 'Marko', surname: 'Marković', sex: 'M', dateOfEntry: new Date(2010, 5, 15, 8, 50, 51)}, {name: 'Jelena', surname: 'Jelenić', sex: 'F', dateOfEntry: new Date(2017, 4, 12, 15, 40, 1)}]);  
});