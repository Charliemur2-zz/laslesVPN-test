// VARIABLES //

// Get class to show Mobile menu
let dynamicMenu;
let dynamicLogIn;
// Get elements to modified active link
let hoverLinks;
// Search element
let searchShow ;
let search;


$(function () {

  dynamicMenu =  $('.js-navigate');
  dynamicLogIn = $('.js-log');
  hoverLinks = document.querySelectorAll('.navigate-list__item--hover')
  searchJS = $('.js-search');
  searchBox = $('.search-box');


  //Calculate the height of <header> tag
  //Use outerHeight() instead of height() if have padding
  let aboveHeight = $('header').height();
  
  // Fix the navbar/header when user scrolls the page
  $(window).on('scroll', () => {
      //if scrolled down more than the header’s height
      if ($(window).scrollTop() > aboveHeight) {
        // if yes, add “fixed” class to the <nav>
        // add padding top to the #content (value is same as the height of the nav)
        $('.main-header').addClass('fixed');
      }
      else {
        // when scroll up or less than aboveHeight, remove the “fixed” class, and the padding-top
        $('.main-header').removeClass('fixed');
      }
    });

  // Toggle class from Small and Medium device menu
  $('.js-menu-button').on('click', function () {
      dynamicMenu.toggleClass('navigate--opened');
      dynamicLogIn.toggleClass('log--opened');

      this.classList.toggle('menu-button--opened');
      this.setAttribute('aria-expanded', this.classList.contains('menu-button--opened'));
    });

  // Loop through the links and add the active class to the current/clicked link
  hoverLinks.forEach(activelink => {
    activelink.addEventListener('click', function() {
      // Remove last element with active class
      hoverLinks.forEach(link => link.classList.remove('active'));
      // Add to current element the active class
      this.classList.add('active');
    });
  });

  // Show search box
  searchJS.on('click', () => {
      searchBox.toggleClass('search-box--show');
    });

  /*
    Slider behavior
    Contains:
      * Arrows, left and right
      * Message box
  */
  $('#checkbox').on('change', function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
  // Carousel applied to Agencies testimonial section
  if ($('.primary-slider__box')) {
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{ items:1 },
          767:{ items:1 },
          1024:{ items:1 }
      }
    })
  } 
});
/* inicializate glider */
window.addEventListener('load', function() {
  new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
})

/* get vurrent year */
window.addEventListener('load', (
  function () {
      document.querySelector('.js-current-year').appendChild(
          document.createTextNode(
              new Date().getFullYear()
          )
      );
  }
));
/* scroll to top buttom */
const scrollUpBtn = document.querySelector('.js-scrollup__btn');
function goToHeader() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
