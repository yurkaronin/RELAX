document.addEventListener("DOMContentLoaded", function () {
  // Обработка открытия и закрытия мобильного меню
  var mobileButtonMenu = document.querySelector('.js-menu-show-btn');
  mobileButtonMenu.addEventListener('click', function () {
    document.body.classList.toggle('mobile-nav-open');
  });

  // Обработка кликов по якорным ссылкам
  var anchorLinks = document.querySelectorAll('.mobile-nav__link[data-anchor="true"]');
  if (anchorLinks.length > 0) {
    anchorLinks.forEach(function (anchorLink) {
      anchorLink.addEventListener('click', function (event) {
        event.preventDefault();  // Предотвращаем стандартный переход по ссылке
        var targetId = this.getAttribute('href');  // Получаем ID цели
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Плавная прокрутка до цели с учетом высоты фиксированного хедера
          const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
          const rect = targetElement.getBoundingClientRect();
          const offset = Math.floor(rect.top + window.pageYOffset - headerHeight);

          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }

        // Закрываем мобильное меню
        document.body.classList.remove('mobile-nav-open');
      });
    });
  }
});
