function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController as vm'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as vm'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html',
      controller: 'RegisterController as vm'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/login.tpl.html',
      controller: 'LoginController as vm'
    })
    .state('root.profile', {
      url: '/:username/profile',
      templateUrl: 'templates/profile.tpl.html',
      controller: 'ProfileController as vm'
    })
    .state('root.createprofile', {
      url: '/:username/createprofile',
      templateUrl: 'templates/createprofile.tpl.html',
      controller: 'CreateProfileController as vm'
    })
    // Portfolio Layout States
    .state('humdrum', {
      url: '/humdrum',
      templateUrl: 'templates/layouts/humdrum.tpl.html'
    })

    $urlRouterProvider.otherwise('/');

}
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
