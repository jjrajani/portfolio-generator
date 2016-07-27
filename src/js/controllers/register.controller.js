function RegisterController (UserService) {
  let vm = this;
  vm.createUser = createUser;

  function createUser(user) {
    UserService.signup(user).then( res => {
      console.log(res)
    });
  } 
}

RegisterController.$inject = ['UserService'];
export { RegisterController };