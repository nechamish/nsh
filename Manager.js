function ShowUsers(){
        const data = localStorage["U"];
        const users = JSON.parse(data);   
            let table = "";
            users.forEach((user) => {
              if(user.firstName!="Manager"){
                table += `
                <tr>
                    <th>${user.firstName + " " + user.lastName}</th>
                    <th>${user.id}</th>
                    <th>${user.email}</th>
                </tr>`;
              }
            });
            const container = document.getElementById("text");
            container.innerHTML += table;
          
        };    
  
  
  
function Filter() {
    const data = localStorage["U"];
    const users = JSON.parse(data); 
        let filt = document.getElementById("filt").value;
        let table = "";
        users.forEach((user) => {
        user.firstName === filt
          ? Find(user)
          : user.lastName === filt
          ? Find(user)
          : user.phone === filt
          ? Find(user)
          : user.hight === filt
          ? Find(user)
          : user.lastName === filt
          ? Find(user)
          : user.id === filt
          ? Find(user)
          : "not found";
   
      
        });
      
    };
  
  function Find(user){
       
    localStorage.setItem("U", JSON.stringify(user));
    window.location.href = "User.html";
 }

 
    
    




      

