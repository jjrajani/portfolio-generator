function CreateProfileController ($state, UserService) {

  let vm = this;
  vm.createProfile = createProfile;

  function createProfile (profile) {
    console.log(profile)
    $state.go('root.profile', {username: UserService.getUser()});
  }


}

CreateProfileController.$inject = ['$state', 'UserService'];
export { CreateProfileController };