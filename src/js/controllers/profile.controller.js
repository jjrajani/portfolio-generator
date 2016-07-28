function ProfileController(ProfileService) {

  let vm = this;

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