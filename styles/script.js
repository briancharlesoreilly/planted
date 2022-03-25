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

// listen for user input into any of the input fields on the form
// -- event listener for when user hits submit button "Post comment"
// -- when submit button triggers, make sure there is an email input values in all three form fields (email address, name, comment), alert user if there isn't
// -- popup a choice of avatar for the user to select to associate with the comment post

// store form element 
const commentForm = document.querySelector("form");
console.log(commentForm);

// store button element
const button = commentForm.querySelector("button");

// store avatar div
const avatarModal = document.querySelector(".avatar");
console.log(avatarModal);

// listen for when button is clicked
button.addEventListener("click", postComment);

// run this when clicked
function postComment(click){
// store name input
  const userName = document.getElementById("name").value;
// store email input
  const userEmail = document.getElementById("email").value;
// store comment input
const userComment = document.getElementById("message").value;
// prevent button click default action
  click.preventDefault()

  if (userEmail && userComment && userName) {
    console.log(userName);
    console.log(userEmail);
    console.log(userComment);
// popup modal to choose avatar
    avatarModal.style.display = "flex";




  } else {
    alert(`Please fill in all fields (name, email and comment) to post a comment! Thank you :)`);
  }




};



// store user input into a variable(s)
// -- store user selection of avatar into variable
// -- store email address, name, and comment input
// -- generate time and date of the submit button click event, place into a variable

// display user input into appropriate fields in comment section
// -- create new div's/elements necessary to add to the comment section
// -- place variables created from user input captured during button submit event trigger into the newly created div/elements and append them to the html