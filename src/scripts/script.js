const dropdownToggleElement = document.querySelector('.dropdown-toggle');
const dropdownElement = document.querySelector('.drop-down');
const popupShim = document.querySelector('.popup-shim');
const popup = document.querySelector('.popup');
const burgerMenuButton = document.querySelector('.burger-menu-button');
const mobileShim = document.querySelector('.mobile-shim');
const mobileMenu = document.querySelector('.mobile-menu');
const logoImg = document.querySelector('.logo--img');


//dropdown
dropdownToggleElement.addEventListener('mouseenter', (event) => {
  dropdownElement.classList.toggle('dropdown-active');
})



//popup & burger menu

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.matches('.button-submit, .slider-button-submit, .calc-button-submit')) {
    popupShim.classList.add('active');
    popup.classList.add('active');
    document.body.classList.add('lock');
  } else if ((target.closest('.popup-close')) && popupShim.classList.contains('active')) {
    popupShim.classList.remove('active');
    popup.classList.remove('active');
    document.body.classList.remove('lock');
  }
  if (target.closest('.burger-menu-button')) {
    mobileShim.classList.add('active');
    mobileMenu.classList.add('active');
    document.body.classList.add('lock');
  }
  if ((target.closest('.mobile-menu--close--button') || 
  target.matches('.mobile-link')) && 
  mobileShim.classList.contains('active') && 
  mobileMenu.classList.contains('active')) {
    mobileShim.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('lock');
  } else if (target.matches('.mobile-menu--submit') && 
  mobileShim.classList.contains('active') && 
  mobileMenu.classList.contains('active')) {
    mobileShim.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('lock');
    popupShim.classList.add('active');
    popup.classList.add('active');
    document.body.classList.add('lock');
  }
});

//slider

const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');
  const slider = document.querySelector('.slider');
  let interval;
  let currentSlide = 0;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlider = () => {
    prevSlide(slides, currentSlide, 'active');
    prevSlide(dots, currentSlide, 'active');
    currentSlide++;

    if(currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, 'active');
    nextSlide(dots, currentSlide, 'active');
  }

  const startSlider = (time = 1500) => {
    interval = setInterval(autoPlaySlider, time);
  };

  const stopSlider = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;
    if (target.matches('.slider-dot, .slider-arrow')) {
      prevSlide(slides, currentSlide, 'active');
      prevSlide(dots, currentSlide, 'active');
      if (target.matches('.slider-arrow-next')) {
        currentSlide++;
      } else if (target.matches('.slider-arrow-prev')) {
        currentSlide--;
      } else if (target.matches('.slider-dot')) {
        dots.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      } else if (currentSlide < 0) {
        currentSlide = slides.length -1;
      }
      nextSlide(slides, currentSlide, 'active');
      nextSlide(dots, currentSlide, 'active');
    } else {
      return;
    }

  });

  slider.addEventListener('mouseover', event => {
    if (event.target.matches('.slider-arrow') || event.target.matches('.slider-dot')) {
      stopSlider();
    }
  });
  slider.addEventListener('mouseout', event => {
    if (event.target.matches('.slider-arrow') || event.target.matches('.slider-dot')) {
      startSlider();
    }
  })

  startSlider(10000);
}

slider();

if (document.documentElement.clientWidth < 576) {
  logoImg.src = '../img/mobile-logo.svg';
}