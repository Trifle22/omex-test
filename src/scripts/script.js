const dropdownToggleElement = document.querySelector('.dropdown-toggle');
const dropdownElement = document.querySelector('.drop-down');
const popupShim = document.querySelector('.popup-shim');
const popup = document.querySelector('.popup');

dropdownToggleElement.addEventListener('mouseenter', (event) => {
  dropdownElement.classList.toggle('dropdown-active');
})

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
})