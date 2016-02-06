'use strict';

angular.module('estimateApp.auth', [
  'estimateApp.constants',
  'estimateApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
