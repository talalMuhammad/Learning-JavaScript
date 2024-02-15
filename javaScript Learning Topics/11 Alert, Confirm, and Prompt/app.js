/*

alert, prompt, confirm user sy interact karny ky liye use hoty hen 

alert() - user ko koi message show karny ky liye use hota he

prompt() - user sy koi question puchny ky liye use hota he is me hamen user sy koi value milti he ya phir agar wo cancel kardata he to null milta he

confirm() - user ko koi message show karny ky liye use hota he or user is ko "Ok" ya "Cancel" kary ga jis ki wja sy hamen true ya false milta he matlab Boolean

Note: All these Pause script execution and don't allow the visitor to interact with the rest of the page until and unless the window has been dismissed

*/

let userName = prompt("What is Your Name", "Sam");

if (userName != null) {
  if (userName === "") {
    alert("Please Enter Your Name");
  } else {
    let userConfirmation = confirm("Are You Sure, You Wanna Join ");

    if (userConfirmation) {
      alert(`Nice to Meet You, ${userName}. Welcome to Our Club`);
    } else {
      alert("Ooooh! Ok. As You Wish 🙂");
    }
  }
} else {
  alert(`Sorry You Cant Enter in Our Club`);
}
