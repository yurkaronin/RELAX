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
  // Инициализация большого слайдера
  if (document.querySelector(".js-reviews-slider-big")) {
    var reviewsSliderBig = new Swiper(".js-reviews-slider-big .swiper", {
      loop: true,
      spaceBetween: 16,
      autoplay: {
        delay: 4000, // Автоматическая смена слайда каждые 4 секунды
        disableOnInteraction: false // Автоплей не останавливается при взаимодействии с пользователем
    },
    });
  }

  // Инициализация миниатюр
  if (document.querySelector(".js-reviews-slider-min")) {
    var reviewsSliderMin = new Swiper(".js-reviews-slider-min .swiper", {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 3,
      breakpoints: {
        768: {
          spaceBetween: 16,
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 'auto',
          spaceBetween: 10,
        }
      },
    });
  }

  // Связываем миниатюры с основным слайдером
  reviewsSliderMin.slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      reviewsSliderBig.slideToLoop(index); // Переключаем большой слайдер на нужный индекс
    });
  });

  // Синхронизация миниатюр при смене слайда в большом слайдере
  reviewsSliderBig.on('slideChange', () => {
    reviewsSliderMin.slideToLoop(reviewsSliderBig.realIndex); // Переключаем миниатюры на текущий слайд большого слайдера
  });


  //   // большие фото
  //   if (document.querySelector(".js-reviews-slider-big")) {
  //     var reviewsSliderBig = new Swiper(".js-reviews-slider-big .swiper", {
  //       loop: true,
  //       spaceBetween: 16,
  //       // effect: "fade",
  //     });
  //   }

  //   // Миниатюры
  //   if (document.querySelector(".js-reviews-slider-min")) {
  //     var reviewsSliderMin = new Swiper(".js-reviews-slider-min .swiper", {
  //       loop: true,
  //       spaceBetween: 16,
  //       slidesPerView: 3,
  //       breakpoints: {
  //         // Когда ширина окна >= 768px
  //         768: {
  //           spaceBetween: 16,
  //           slidesPerView: 3,
  //         },
  //         // Когда ширина окна < 768px
  //         320: {
  //           slidesPerView: 'auto',
  //           spaceBetween: 10,
  //         }
  //       }

  //     });
  //   }

  });


  // техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
  // получить в консоли элемент, по которому кликнули
  document.addEventListener("click", (e) => console.log(e.target));
