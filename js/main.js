function showWhiteMenu() {
    document.getElementById('header').classList.add('header_scrolled');
    document.getElementById('logo').classList.add('header__logo_invert');
    document.getElementById('menuIcon').classList.add('header__logo_invert');
  }
  function hideWhiteMenu() {
    document.getElementById('header').classList.remove('header_scrolled');
    document.getElementById('logo').classList.remove('header__logo_invert');
    document.getElementById('menuIcon').classList.remove('header__logo_invert');
  }
  function showMenu() {
    document.getElementById('header').classList.add('header_scrolled');
    document.getElementById('logo').classList.add('header__logo_invert');
    document.getElementById('menuIcon').classList.add('hidden');
    document.getElementById('menuClose').classList.remove('hidden');
    document.getElementById('headerMenu').classList.remove('hidden');
    document.getElementById('headerMenu').classList.add('header__menu_visible');
    document.getElementById('menuIcon').classList.add('header__logo_invert');
  }
  function hideMenu() {
    document.getElementById('header').classList.remove('header_scrolled');
    document.getElementById('logo').classList.remove('header__logo_invert');
    document.getElementById('menuIcon').classList.remove('hidden');
    document.getElementById('menuClose').classList.add('hidden');
    document.getElementById('headerMenu').classList.add('hidden');
    document.getElementById('headerMenu').classList.remove('header__menu_visible');
    document.getElementById('menuIcon').classList.remove('header__logo_invert');
  }
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      showWhiteMenu();
    } else if (!document.getElementById('headerMenu').classList.contains('header__menu_visible')) {
      hideWhiteMenu();
    }
  });
  document.addEventListener('click', (event) => {
    if (event.target.closest('#menuIcon')) {
      showMenu();
    }
    if (event.target.closest('#menuClose')) {
      hideMenu();
    }
  });
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
  
    // If we need pagination
    pagination: {
      // el: '.swiper__pagination',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper__next',
      prevEl: '.swiper__prev',
    },
  
  });
  document.addEventListener('click', (event) => {
    if (event.target.closest('.swiper__next') || event.target.closest('.swiper__prev')) {
      document.querySelector('.swiper__now').textContent = `${swiper.realIndex + 1} `;
    }
  });