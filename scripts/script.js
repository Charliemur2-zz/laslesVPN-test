// VARIABLES //

// Get class to show Mobile menu
let dynamicMenu;
let dynamicLogIn;
// Get elements to modified active link
let hoverLinks;
// Search element
let searchShow ;
let search;


$(document).ready(function () {
  dynamicMenu =  $('.js-navigate');
  dynamicLogIn = $('.js-log');
  hoverLinks = document.querySelectorAll('.navigate-list__item--hover')
  searchJS = $('.js-search');
  searchBox = $('.search-box');


  //Calculate the height of <header> tag
  //Use outerHeight() instead of height() if have padding
  let aboveHeight = $('header').outerHeight();
  
  // Fix the navbar/header when user scrolls the page
  $(window).scroll(() => {
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
  $('.js-menu-button').click(function () {
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
  searchJS.click(function () {
    searchBox.toggleClass('search-box--show');
  });
});

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
