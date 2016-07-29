function HomeController() {

  let vm = this;
  vm.jumbotron = jumbotron;
  vm.images = ['http://i.imgur.com/jB68hH5.png', 'https://www.placecage.com/200/200']
  vm.jumbotron = jumbotron;
  
  function jumbotron() {
    let img = document.querySelector('.jumbotron');
    let i = 0;
    setInterval(function () {
      img.src = vm.images[i];
      i++
      if (i >= vm.images.length) {
        i = 0;
      }
    }, 2000)
  }

}

HomeController.$inject = [];
export { HomeController };
