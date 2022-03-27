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

// store button elements
const button = commentForm.querySelector("button");

// store avatar div
const avatarModal = document.querySelector(".avatar");

// store #comment-section-flex as an element
const commentSection = document.getElementById("comment-section-flex");


// store instructions class in a variable
const instructions = document.getElementById("instructions");
// store avatar choices as variables
const pokemon1 = document.getElementById("pokemon1"); 
const pokemon2 = document.getElementById("pokemon2");
const pokemon3 = document.getElementById("pokemon3");
const pokemon4 = document.getElementById("pokemon4");
const pokemon5 = document.getElementById("pokemon5");
const pokemon6 = document.getElementById("pokemon6");



function saveAvatarChoice(pokemon) {
  avatarModal.style.display = "none";
  const avatarPic = pokemon.target.parentElement.firstElementChild.outerHTML;

  console.log(avatarPic);

  // create new comment function
  function addComment () {
  // insert HTML into comment section with all user generated info
    commentSection.innerHTML += `
    <div class="comment-box">
      <div class="comment-img">
        ${avatarPic}
      </div>
      <div class="comment-content">
        <h6 class="blog-post-date">placeholder date by ${userNameGlobal}</h6>
        <p>USER COMMENT GOES HERE</p>
      </div>
    </div>`;
  };
  addComment();
}

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

  // 8888888888888888888888888888888
  // delete this if no worky
  function saveAvatarChoice(pokemon) {
    avatarModal.style.display = "none";
    const avatarPic = pokemon.target.parentElement.firstElementChild.outerHTML;
  
    console.log(avatarPic);
  
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
  

  // delete this if no worky
  // 8888888888888888888888888888888

  // run program so long as the user inputs values for email, name, AND a comment (all three required), otherwise alert them to do so.
  if (userEmail && userComment && userName) {
    console.log(userName);
    console.log(userEmail);
    console.log(userComment);
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