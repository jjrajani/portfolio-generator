function ProfileController(ProfileService, $state, UserService, $http, SERVER, GithubService) {

  let vm = this;
  vm.editMode = false;
  vm.profile = {};
  vm.gitProfile = {};
  vm.repos = {};
  vm.updateProfile = updateProfile;
  vm.newestFirstRepos = {};
  vm.recentlyUpdatedRepos = {};
  vm.stars = stars;
  vm.showPortfolio = showPortfolio;

  init()

  function init() {
    ProfileService.getProfile().then( res => {
      vm.profile = res.data;
      GithubService.getGitProfile(vm.profile.user).then( res => {
        vm.gitProfile = res.data;
        vm.repos = res.data.repos;
        console.log(vm.repos);
        vm.newestFirstRepos = GithubService.newestFirst(vm.repos);
        vm.recentlyUpdatedRepos = GithubService.recentlyUpdated(vm.repos);
      });
    });
  }

  function stars(repo) {
    return repo.stargasers_count > 0;
  }

  function updateProfile (profile) {
    ProfileService.updateProfile(profile).then( res => {
      $state.go('root.profile', {username: UserService.getUser()});
    });
  }

  function showPortfolio () {
    console.log(vm.profile.user)
    console.log(vm.profile.layout)
    if (vm.profile.layout === 1) {
      vm.profile.layout = 'humdrum'
    } else {
      vm.profile.layout = 'sodawater'
    }
    $state.go('humdrum', {username: vm.profile.user, layout: vm.profile.layout})
  }
}

ProfileController.$inject = ['ProfileService', '$state', 'UserService', '$http', 'SERVER', 'GithubService'];
export { ProfileController };
