function RegisterController () {
  let vm = this;
  vm.createUser = createUser;

  function createUser(user) {
    console.log(user);
  } 
}

RegisterController.$inject = [];
export { RegisterController };