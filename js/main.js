document.addEventListener("DOMContentLoaded", function () {
  // new SimpleBar(document.querySelector(".tabs-list"));

  SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
  });


  // Слайдер ОТЗЫВЫ

  if (document.querySelector(".reviews")) {

    // Инициализация большого слайдера



    // Инициализация миниатюр
    var swiper = new Swiper(".js-reviews-slider-min .swiper", {
      spaceBetween: 16,
      slidesPerView: 3,
      loop: true,
      freeMode: true,
      watchSlidesProgress: true,

    });

    var swiper2 = new Swiper(".js-reviews-slider-big .swiper", {
      loop: true,
      spaceBetween: 16,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      // navigation: {
      //   nextEl: ".js-reviews-slider-big .swiper-button-next",
      //   prevEl: ".js-reviews-slider-big .swiper-button-prev",
      // },
      thumbs: {
        swiper: swiper,
      },
    });
  }

});


// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener("click", (e) => console.log(e.target));
