document.addEventListener("DOMContentLoaded", function() {
  // Проверка наличия классов .home-page или .promo-page
  if (document.body.classList.contains('home-page') || document.body.classList.contains('promo-page')) {
    console.log('Обнаружен один из классов. Скрипт не выполняется.');
    // Здесь можно добавить код для обработки страницы с одним из этих классов
  } else {
    console.log('Условие выполнено! Выполняем скрипт');
    // Функция для установки отступа, основанная на высоте шапки
    function setInitialMainMargin() {
      const header = document.querySelector('header');
      const mainElement = document.querySelector('.main');

      if (header && mainElement) {
        const headerHeight = header.offsetHeight;
        mainElement.style.marginTop = headerHeight + 'px';
      }
    }

    // Вызов функции для установки отступа сразу после загрузки DOM
    setInitialMainMargin();
  }
});
