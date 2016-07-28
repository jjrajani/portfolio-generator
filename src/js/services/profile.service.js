function ProfileService (SERVER, $http, UserService) {

  this.createProfile = createProfile;

  function createProfile (profile) {
    return $http.post(SERVER.URL + 'profiles', profile, UserService.headers())
  }

}

ProfileService.$inject = ['SERVER', '$http', 'UserService'];
export { ProfileService };