function ProfileController(ProfileService, $state, UserService, $http, SERVER) {

  let vm = this;
  vm.editMode = false;
  vm.profile = {};
  vm.updateProfile = updateProfile;

  init()

  function init() {
    ProfileService.getProfile().then( res => {
      vm.profile = res.data;
    });
  }


  function updateProfile (profile) {
    ProfileService.updateProfile(profile).then( res => {
      $state.go('root.profile', {username: UserService.getUser()});
    });
  }



}

ProfileController.$inject = ['ProfileService', '$state', 'UserService', '$http', 'SERVER'];
export { ProfileController };