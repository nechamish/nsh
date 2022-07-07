let params = new URLSearchParams(window.location.search);
let id = params.get("userId");

const onLoad = () => {
  // const params = new URLSearchParams(window.location.search);
  // const id = params.get("userId");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://localhost:3000/User/${id}`);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      let table = "";
      user = JSON.parse(xhr.responseText);
      dairies = user.dairies;
      user.dairies.forEach((element) => {
        table += `
                <tr>
                    <th class="td">${"Date: "}</th>
                    <th>${element.date}</th>
                     <th class="td">${" Breakfast: "}</th>
                    <th>${element.Breakfast[0]},</th> <th>${
          element.Breakfast[1]
        },</th> <th>${element.Breakfast[2]},</th>
                    <th>${element.Breakfast[3]},</th>  <th>${
          element.Breakfast[4]
        }</th>
                    <th class="td">${" Lanch: "}</th>
                    <th>${element.Lanch[0]},</th>  <th>${
          element.Lanch[1]
        },</th>   <th>${element.Lanch[2]}</th>
                    <th class="td">${" Dinner: "}</th>
                    <th>${element.Dinner[0]},</th>  <th>${
          element.Dinner[1]
        },</th>  <th>${element.Dinner[2]}</th>
                </tr>`;
      });
      const container = document.getElementById("text");
      container.innerHTML += table;
    }
  };
};

newday = () => {
  // const params = new URLSearchParams(window.location.search);
  // const id = params.get("userId");
  window.location.href = `Dairy.html?userId=${id}`;
};
