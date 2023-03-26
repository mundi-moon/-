
//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

//
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greenting = document.querySelector("#greenting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(userName){
   // const userName = loginInput.value;
    userName.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greenting.innerText = username;
    // greenting.innerText = "Hello " + username;
    //greenting.innerText = `Hello  ${username}`;
    greenting.classList.remove(HIDDEN_CLASSNAME);
    console.log(loginInput.value);
    }

setInterval(function(){
    onLoginSubmit(userName)},1440000
)

loginForm.addEventListener("submit",onLoginSubmit);