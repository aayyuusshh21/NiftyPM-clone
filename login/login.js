function loginUser() {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  localStorage.setItem("email", JSON.stringify(email));
  if (email == "" || password == "") {
    alert("Please fill the details.");
  } else {
    let data = {
      email,
      password,
    };
    let userData = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < userData.length; i++) {
      if (userData.email == data.email && userData.password == data.password) {
        window.location = "/punchy-flowers-9069/login/workspace/workspace.html";
      } else {
        alert("User not found. Please enter correct details.");
      }
    }
  }
}
function signUp() {
  window.location = "/punchy-flowers-9069/signUp/signUp.html";
}
