function ProfileController(ProfileService, $state, UserService, $http, SERVER, GithubService) {

  let vm = this;
  vm.editMode = false;
  vm.profile = {};
  vm.gitProfile = {};
  vm.repos = {};
  vm.updateProfile = updateProfile;

  init()

  function init() {
    ProfileService.getProfile().then( res => {
      vm.profile = res.data;
      console.log(res.data);
      GithubService.getGitProfile(vm.profile.user).then( res => {
        vm.gitProfile = res.data;
        vm.repos = res.data.repos;
        console.log(vm.repos);
      });
    });
  }

  function updateProfile (profile) {
    ProfileService.updateProfile(profile).then( res => {
      $state.go('root.profile', {username: UserService.getUser()});
    });
  }
}

ProfileController.$inject = ['ProfileService', '$state', 'UserService', '$http', 'SERVER', 'GithubService'];
export { ProfileController };
