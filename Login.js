function Enter() {
  var mail = document.getElementById("mail").value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/Login");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      let users = JSON.parse(xhr.responseText);
      if (users[0].email === mail) {
        localStorage.setItem("U", JSON.stringify(users));
        window.location.href = "Manager.html";
      } else {
        var CurentUser = users.find((u) => u.email === mail);
        if (CurentUser != null) {
          localStorage.setItem("U", JSON.stringify(CurentUser));
          // window.location.href = "User.html";
          window.location.href = `User.html?userId=${CurentUser.id}`;
        }
      }
    }
  };
}
