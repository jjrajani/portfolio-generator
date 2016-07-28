function ProfileService (SERVER, $http, UserService) {

  this.createProfile = createProfile;
  this.getProfile = getProfile;

  function createProfile (profile) {
    return $http.post(SERVER.URL + 'profiles', profile, UserService.headers())
  }

  function getProfile () {
    return $http.get(SERVER.URL + 'profiles/' + UserService.userId(), UserService.headers())
  }

}

ProfileService.$inject = ['SERVER', '$http', 'UserService'];
export { ProfileService };