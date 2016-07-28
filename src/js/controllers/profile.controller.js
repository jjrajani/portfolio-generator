function ProfileController(ProfileService) {

  let vm = this;
  vm.editMode = false;
  init()

  function init() {
    ProfileService.getProfile().then( res => {
      console.log(res.data)
      vm.profile = res.data;
    })
  }

}

ProfileController.$inject = ['ProfileService'];
export { ProfileController };