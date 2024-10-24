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


  // Слайдеры в отзывах
  // большие фото
  if (document.querySelector(".js-reviews-slider-big")) {
    var reviewsSliderBig = new Swiper(".js-reviews-slider-big .swiper", {
      loop: true,
      spaceBetween: 16,
      effect: "fade",
    });
  }
  if (document.querySelector(".js-reviews-slider-text")) {
    var reviewsSliderText = new Swiper(".js-reviews-slider-text .swiper", {
      loop: true,
      spaceBetween: 16,
      // effect: "fade",
    });
  }

  if (document.querySelector(".js-reviews-slider-min")) {
    var reviewsSliderMin = new Swiper(".js-reviews-slider-min .swiper", {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 3,
    });
  }




});


// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener("click", (e) => console.log(e.target));
