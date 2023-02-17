/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const outputDiv = document.getElementById("output");
let users = false;

document.getElementById("btn").addEventListener("click", () => {
  if (users === false) {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].login);
          console.log(data[i].avatar_url);

          const userCard = document.createElement("div");
          userCard.classList.add("user-card");

          const userLoginName = document.createElement("p");
          userLoginName.classList.add("user-login-name");
          userLoginName.innerText = data[i].login;
          userCard.append(userLoginName);

          const userAvatar = document.createElement("img");
          userAvatar.classList.add("user-avatar");
          userAvatar.src = data[i].avatar_url;
          userCard.append(userAvatar);

          outputDiv.append(userCard);
        }
        document.getElementById("message").innerHTML = " ";
      });
    users = true;
  } else {
    alert("I have already shown you the present users");
  }
});
