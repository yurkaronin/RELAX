document.addEventListener('DOMContentLoaded', function() {
  window.onresize = function() {
    if (window.innerWidth >= 1280) {
      var buttonMenu = document.querySelector('.js-menu-button');

      if (!buttonMenu) return;

      buttonMenu.addEventListener('click', function() {
        document.body.classList.toggle('drop-down-menu-open');
      });
    }
  };
});
