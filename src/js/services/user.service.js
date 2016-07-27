function UserService (SERVER, $http) {

  this.signup = signup;
  this.login = login;

  function signup (user) {
    console.log(user)
    $http.post(SERVER.URL + 'signup', user);
  }

  function login (user) {
    console.log(user)
  }

}

UserService.$inject = ['SERVER', '$http']

export { UserService };