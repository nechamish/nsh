let autocomplete_result;
let productN;
let autocomplete;
let listofproduct;
var countries = [];
const serchProduct = () => {
  const options = {
    method: "GET",
    headers: {},
  };
  var prod = document.getElementById("autocomplete").value;
  const req = fetch(
    `https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${prod}`
  );
  req
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      debugger;
      product(response.result.records);
    })
    .catch((err) => console.error(err));
};
const product = (response) => {
  var pp = document.getElementById("text");
  let table = "";
  response.forEach((product) => {
    pp.value = product.shmmitzrach;
    table += `
    <tr>
        <th>${product.shmmitzrach}</th>
        <th>total fat:${product.total_fat}</th>
        <th>total total sugars:${product.total_sugars}</th>
        <th>carbohydrates:${product.carbohydrates}</th>
        <th>food energy:${product.food_energy}</th>
        <th>total fat:${product.poly_unsaturated_fat}</th>      
    </tr>`;
  });

  const container = document.getElementById("text");
  container.innerHTML += table;
};
const serch = () => {
  const options = {
    method: "GET",
    headers: {},
  };
  const req = fetch(
    'https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&limit=4633'
  );
  req
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      listofproduct=response.result.records;
      return listofproduct;
    })
    .then(()=>aoto())
    .catch((err) => console.error(err));
};

function aoto(){
  productN=listofproduct.map(producrs=>producrs.shmmitzrach)
  autocomplete = document.getElementById('autocomplete');
  autocomplete_result=document.getElementById('autocomplete_result');

 autocomplete.addEventListener("keyup", updPopup);
 autocomplete.addEventListener("change", updPopup);
 autocomplete.addEventListener("focus", updPopup);
}

function popupClearAndHide() {
  autocomplete_result.innerHTML = "";
  autocomplete_result.style.display = "none";
}

function updPopup() {
  if(!autocomplete.value) {
    popupClearAndHide();
    return;
  }
  var a = new RegExp("^" + autocomplete.value, "i");
  for(var x = 0, b = document.createDocumentFragment(), c = false; x < productN.length; x++) {
    if(a.test(productN[x])) {
      c = true;
      var d = document.createElement("p");
      d.innerText = productN[x];
      d.setAttribute("onclick", "autocomplete.value=this.innerText;autocomplete_result.innerHTML='';autocomplete_result.style.display='none';");
      b.appendChild(d);
    }
  }
  if(c == true) {
    autocomplete_result.innerHTML = "";
    autocomplete_result.style.display = "block";
    autocomplete_result.appendChild(b);
    return;
  }
  popupClearAndHide();
}

