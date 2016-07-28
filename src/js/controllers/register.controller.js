function RegisterController (UserService, $state) {
  let vm = this;
  vm.createUser = createUser;

  function createUser(user) {
    UserService.signup(user).then( res => {
      $state.go('root.home')
    });
  } 
}

RegisterController.$inject = ['UserService', '$state'];
export { RegisterController };