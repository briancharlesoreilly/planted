// declare variables
const burgerMenu = document.querySelector(".burger-slide-out");
const burgerCheckbox = document.querySelector("#hamburger-menu");

// event listener for when user clicks anywhere in menu other than a link
burgerMenu.addEventListener("click", menuSlide);

// close slide out menu when user clicks slide out menu by toggling the checkbox
function menuSlide() {
  if (burgerCheckbox.checked === true) {
    burgerCheckbox.checked = false;
  } else {
    burgerCheckbox.checked = true;
  }
}
