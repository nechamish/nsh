let params = new URLSearchParams(window.location.search);
let id = params.get("userId");

const foodOfMeals = () => {
  const obj = {
    date: document.getElementById("date").value,
    Breakfast: [
      document.getElementById("food1").value,
      document.getElementById("food2").value,
      document.getElementById("food3").value,
      document.getElementById("food4").value,
      document.getElementById("food5").value,
    ],
    Lanch: [
      document.getElementById("meal1").value,
      document.getElementById("meal2").value,
      document.getElementById("meal3").value,
      document.getElementById("meal4").value,
      document.getElementById("meal5").value,
    ],
    Dinner: [
      document.getElementById("eat1").value,
      document.getElementById("eat2").value,
      document.getElementById("eat3").value,
      document.getElementById("eat4").value,
      document.getElementById("eat5").value,
    ],
  };
  enterToJson(obj);
};

dairies = [];

enterToJson = (obj) => {
  //  const params = new URLSearchParams(window.location.search);
  //  const id = params.get("userId");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://localhost:3000/users/${id}`);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      user = JSON.parse(xhr.responseText);
      dairies = user.dairies;
      dairies.push(obj);
      puch();
    }
  };
};

function puch() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  fetch(`http://localhost:3000/users/${id}`, {
    method: `PATCH`,
    body: JSON.stringify({
      dairies: dairies,
    }),
    headers: { "Content-type": `application/json; charset=UTF-8` },
  }).then((response) => {
    if (response.status !== 200 || response.status === undefined) {
      alert(response.message);
    }
  });
}

const mydairy = () => {
  // const params = new URLSearchParams(window.location.search);
  // const id = params.get("userId");
  window.location.href = `MyDairy.html?userId=${id}`;
};