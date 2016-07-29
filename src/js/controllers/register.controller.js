function RegisterController (UserService, $state, $cookies) {
  let vm = this;
  vm.createUser = createUser;

  function createUser(user) {
    UserService.signup(user).then( res => {
      console.log(res.data)
      $cookies.put('access_token', res.data.access_token);
      $cookies.put('username', res.data.username);
      $state.go('root.createprofile', {username: UserService.getUser()})
    });
  } 
}

RegisterController.$inject = ['UserService', '$state', '$cookies'];
export { RegisterController };