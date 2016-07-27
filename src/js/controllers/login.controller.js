function LoginController (UserService) {

  let vm = this;
  vm.loginUser = loginUser;

  function loginUser(user) {
    UserService.login(user)
  }
  

}

LoginController.$inject = ['UserService'];
export { LoginController };