function create() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let url = document.getElementById("url").value;
  if (name == "" || url == "") {
    alert("Please fill the details.");
  } else {
    let workspace = {
      name,
      url: url + ".niftypm.com",
    };
    localStorage.setItem("workspace", JSON.stringify(workspace));
    window.location = "/punchy-flowers-9069/tasks/createTask.html";
  }
}
function input() {
  let Value = document.getElementById("name").value;
  document.getElementById("url").value = Value;
}
function goBack() {
  window.location = "/punchy-flowers-9069/login/workspace/workspace.html";
}
