function ProfileService (SERVER, $http, UserService) {

  this.createProfile = createProfile;
  this.getProfile = getProfile;
  this.updateProfile = updateProfile;

  function createProfile (profile) {
    return $http.post(SERVER.URL + 'profiles', profile, UserService.headers());
  }

  function getProfile () {
    return $http.get(SERVER.URL + 'profiles/' + UserService.getUser(), UserService.headers());
  }

  function updateProfile (profile) {
    return $http.put(SERVER.URL + 'profiles/' + UserService.getUser(), profile, UserService.headers());
  }

}

ProfileService.$inject = ['SERVER', '$http', 'UserService'];
export { ProfileService };