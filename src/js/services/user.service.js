function UserService (SERVER, $http, $cookies) {

  this.signup     = signup;
  this.login      = login;
  this.getUser    = getUser;
  this.logOut     = logOut;
  this.isLoggedIn = isLoggedIn;
  this.headers    = headers;
  this.userId     = userId;

  function signup (user) {
    return $http.post(SERVER.URL + 'signup', user);
  }

  function login (user) {
    return $http.post(SERVER.URL + 'login', user);
  }

  function getUser () {
    return $cookies.get('username')
  }

  function logOut () {
    $cookies.remove('username');
    $cookies.remove('access_token');
  }

  function isLoggedIn () {
    return (this.getUser()) ? true : false;
  }

  function headers () {
    let authToken = $cookies.get('access_token');
    return { headers: { 'Access-Token': authToken }};
  }

  function userId () {
    return $cookies.get('user_id');
  }

}

UserService.$inject = ['SERVER', '$http', '$cookies']

export { UserService };