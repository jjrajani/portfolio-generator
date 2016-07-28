function CreateProfileController ($state, UserService, ProfileService) {

  let vm = this;
  vm.createProfile = createProfile;

  function createProfile (profile) {
    ProfileService.createProfile(profile).then( res => {
      $state.go('root.profile', {username: UserService.getUser()});
    });
  }


}

CreateProfileController.$inject = ['$state', 'UserService', 'ProfileService'];
export { CreateProfileController };