function HomeController($state) {

  let vm = this;
  vm.jumbotron = jumbotron;
  vm.images = ['http://i.imgur.com/jB68hH5.png', 'https://www.placecage.com/200/200']
  vm.jumbotron = jumbotron;
  
  console.log($state.current)

  function jumbotron() {
    let img = document.querySelector('.jumbotron');
    let i = 0;
    if ($state.current.name === 'root.home') {
      setInterval(function () {
        img.src = vm.images[i];
        i++
        if (i >= vm.images.length) {
          i = 0;
        }
      }, 3000);
    }
    
  }

}

HomeController.$inject = ['$state'];
export { HomeController };
