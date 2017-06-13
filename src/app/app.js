'use strict';
(function (angular) {
    /* Declaramos el módulo */
    angular.module('app', ['ui.router']);
    angular.module('app').config(['$stateProvider', '$urlRouterProvider', appConfig]);
    function appConfig($stateProvider, $urlRouterProvider) {

        var main = {
            name: 'main',
            url: '/main',
            template: '<comp-mainview></comp-mainview>'
        };
        var about = {
            name: 'aboutus',
            url: '/aboutus',
            template: '<comp-aboutus></comp-aboutus>'
        };
        var chat = {
            name: 'chat',
            url: '/chat',
            template: '<comp-chat></comp-chat>'
        };
        $stateProvider.state(main);
        $stateProvider.state(about);
         $stateProvider.state(chat);
        $urlRouterProvider.otherwise('/main');
    }//end appConfig

})(angular)
