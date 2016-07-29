function LayoutController (UserService, $rootScope, $stateParams, ProfileService, GithubService) {

   let vm = this;
   vm.logOut = logOut;
   vm.loggedIn = false;
   vm.username = UserService.getUser();
   vm.gitProfile = {};
   vm.repos = {};

   init ()

  $rootScope.$on('loginChange', (event, status) => {
    vm.loggedIn = status;
  });

  function init () {
    vm.loggedIn = UserService.isLoggedIn();

    ProfileService.getProfile().then( res => {
      vm.profile = res.data;
      console.log(res.data);
      GithubService.getGitProfile(vm.profile.user).then( res => {
        vm.gitProfile = res.data;
        vm.repos = res.data.repos;
      });
    });
  }


  function logOut () {
    UserService.logOut();
    vm.loggedIn = false;
  }
}

LayoutController.$inject = ['UserService', '$rootScope', '$stateParams', 'ProfileService', 'GithubService'];
export { LayoutController };
