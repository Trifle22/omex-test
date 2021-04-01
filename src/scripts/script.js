const dropdownToggleElement = document.querySelector('.dropdown-toggle');
const dropdownElement = document.querySelector('.drop-down');

dropdownToggleElement.addEventListener('mouseenter', (event) => {
  dropdownElement.classList.toggle('dropdown-active');
})
