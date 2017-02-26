// Hamburger menu code retrieved from http://johnm.io/project/hamburgler/

document.getElementById('hamburger').addEventListener('click', checkNav);
  window.addEventListener("keyup", function(e) {
    if (e.keyCode == 27) closeNav();
  }, false);

  function checkNav() {
    if (document.body.classList.contains('hamburger-active')) {
      closeNav();
    } else {
      openNav();
    }
  }

  function closeNav() {
    document.body.classList.remove('hamburger-active');
  }

  function openNav() {
    document.body.classList.add('hamburger-active');
  }
