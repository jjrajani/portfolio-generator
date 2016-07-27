function LoginController (UserService) {

  let vm = this;
  vm.loginUser = loginUser;

  function loginUser(user) {
    UserService.login(user).then( res => {
      console.log(res)
    });
  }
  

}

LoginController.$inject = ['UserService'];
export { LoginController };