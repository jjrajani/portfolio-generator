function LoginController (UserService, $cookies, $state) {

  let vm = this;
  vm.loginUser = loginUser;

  function loginUser(user) {
    UserService.login(user).then( res => {
      console.log(res)
      $cookies.put('access_token', res.data.access_token);
      $cookies.put('username', res.data.username);
      $cookies.put('user_id', res.data.id);
      $state.go('root.home');
    });
  }
  

}

LoginController.$inject = ['UserService', '$cookies', '$state'];
export { LoginController };