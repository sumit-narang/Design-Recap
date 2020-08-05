var normal_mode = document.querySelector('.normal-mode');
  var dark_mode = document.querySelector('.dark-mode');
  var main_body = document.querySelector('.main');

  //when moon is clicked
  var dark_mode = document.querySelector('.dark-mode');
  dark_mode.addEventListener("click", darkMode);
  function darkMode() {
    dark_mode.classList.add("moveMoonDown");
    normal_mode.classList.add("moveSunUp");
    main_body.classList.add("main-light-mode");
  }
  
  //when sun is clicked
  normal_mode.addEventListener("click", normalMode);
  function normalMode() {
    dark_mode.classList.remove("moveMoonDown");
    normal_mode.classList.remove("moveSunUp");
    main_body.classList.remove("main-light-mode");
  }

  var count_overlay = 1;
  var after = document.querySelector('.more');
  after.addEventListener("click", move_overlay);
  function move_overlay() {
      document.querySelector('.more').classList.toggle('move_overlay');
  }
