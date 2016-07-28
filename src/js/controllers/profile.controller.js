function ProfileController () {

  let vm = this;
  vm.createProfile = createProfile;

  function createProfile (profile) {
    console.log(profile)
  }


}

ProfileController.$inject = [];
export { ProfileController };