function ShareProfileController($state, $stateParams, UserService, $http, SERVER, GithubService) {

  let vm = this;
  vm.profile = {};
  vm.gitProfile = {};
  vm.repos = {};
  vm.user_obj = {};


// vm.gitProfile.user_obj.
  init()
// YOU NEED TO PUT THIS INTO CONFIG / MAIN + USE STATEPARAPMS IN CONFIG
  function init() {
    GithubService.getUserProfile($stateParams.params.username).then( res => {
      vm.profile = res.data;
      console.log("vm.profile: ", res.data);
      GithubService.getGitProfile(vm.profile.user).then( res => {
        vm.gitProfile = res.data;
        vm.repos = res.data.repos;
        vm.user_obj = res.data.user_obj;
        console.log("vm.gitProfile: ", vm.gitProfile, "\nvm.user_obj: ", vm.user_obj);
      });
    });
  }


}

ShareProfileController.$inject = ['ProfileService', '$state', 'UserService', '$http', 'SERVER', 'GithubService'];
export { ShareProfileController };
