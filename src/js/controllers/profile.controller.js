function ProfileController(ProfileService, $state, UserService) {

  let vm = this;
  vm.editMode = false;
  vm.updateProfile = updateProfile;
  init()

  function init() {
    ProfileService.getProfile().then( res => {
      console.log(res.data)
      vm.profile = res.data;
    })
  }

  function updateProfile (profile) {
    ProfileService.updateProfile(profile).then( res => {
      $state.go('root.profile', {username: UserService.getUser()});
    })
  }



}

ProfileController.$inject = ['ProfileService', '$state', 'UserService'];
export { ProfileController };