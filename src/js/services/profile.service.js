function ProfileService (SERVER, $http) {

  this.createProfile = createProfile;

  function createProfile (profile) {
    console.log(profile);
  }

}

ProfileService.$inject = ['SERVER', '$http'];
export { ProfileService };