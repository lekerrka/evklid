document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementsByClassName('burger_btn')[0];
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerClose = document.querySelector('.burger-close');

  console.log(burgerMenu);

  burgerBtn.addEventListener('click', function () {
    burgerMenu.classList.remove('burger-menu_hidden');
  });

  burgerClose.addEventListener('click', function () {
    burgerMenu.classList.add('burger-menu_hidden');
  });
});

$(function () {
  $('#accordion').accordion({
    heightStyle: 'content',
  });
});
