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

// PSEUDO CODE FOR COMMENT SECTION
// listen for user input into any of the input fields on the form
// -- event listener for when user hits submit button "Post comment"
// -- when submit button triggers, make sure there is an email input values in all three form fields (email address, name, comment), alert user if there isn't
// -- popup a choice of avatar for the user to select to associate with the comment post
// store user input into a variable(s)
// -- store user selection of avatar into variable
// -- store email address, name, and comment input
// -- generate time and date of the submit button click event, place into a variable
// display user input into appropriate fields in comment section
// -- create new div's/elements necessary to add to the comment section
// -- place variables created from user input captured during button submit event trigger into the newly created div/elements and append them to the html

// store form, button, div elements, etc
const commentForm = document.querySelector("form");
const button = commentForm.querySelector("button");
const avatarModal = document.querySelector(".avatar");
const commentSection = document.getElementById("comment-section-flex");
const instructions = document.getElementById("instructions");
const pokemon1 = document.getElementById("pokemon1"); 
const pokemon2 = document.getElementById("pokemon2");
const pokemon3 = document.getElementById("pokemon3");
const pokemon4 = document.getElementById("pokemon4");
const pokemon5 = document.getElementById("pokemon5");
const pokemon6 = document.getElementById("pokemon6");

// listen for when "post comment button is clicked
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
  click.preventDefault();

  function saveAvatarChoice(pokemon) {
    avatarModal.style.display = "none";
    const avatarPic = pokemon.target.parentElement.firstElementChild.outerHTML;


    // create new comment function
    function addComment () {
    // insert HTML into comment section with all user generated info
      commentSection.innerHTML += `
      <div class="comment-box">
        <div class="comment-img">
          ${avatarPic}
        </div>
        <div class="comment-content">
          <h6 class="blog-post-date">placeholder date by ${userName}</h6>
          <p>${userComment}</p>
        </div>
      </div>`;
    };
    addComment();
  }

  // run program so long as the user inputs values for email, name, AND a comment (all three required), otherwise alert them to do so.
  if (userEmail && userComment && userName) {
    // popup modal to choose avatar
    avatarModal.style.display = "flex";

    // store avatar instructions "okay-button" as a variable
    const avatarsOkay = document.getElementById("okay-button");
    // listen for when "okay" from avatars instructions is clicked
    avatarsOkay.addEventListener("click", closeInstructions);
    function closeInstructions(click) {
      click.preventDefault();
      instructions.style.display = "none"; // hiding instructions
      pokemon1.addEventListener("click", saveAvatarChoice);
      pokemon2.addEventListener("click", saveAvatarChoice);
      pokemon3.addEventListener("click", saveAvatarChoice);
      pokemon4.addEventListener("click", saveAvatarChoice);
      pokemon5.addEventListener("click", saveAvatarChoice);
      pokemon6.addEventListener("click", saveAvatarChoice);
    }

    // clear input fields to empty strings when submitted
    // *****not working**********
    userName.value = "";
    userEmail.value = "";
    userComment.value = "";
    // *****not working**********

  } else {
    alert(`Please fill in all fields (name, email and comment) to post a comment! Thank you :)`);
  }
};

// note: things I didn't get to finish, or couldn't figure out
// 1) clear information from forms after click
// 2) find a way to generate the date and time when a button was submitted and store it in a variable to publish on the form