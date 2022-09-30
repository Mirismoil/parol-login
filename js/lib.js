let form = document.querySelector(".form");
let input = document.querySelector("input");
let password = document.getElementById("password");
let eye = document.getElementById("eye").addEventListener("click", ()=>{
  password.type = password.type == "text" ? "password" : "text"
});

const storage = window.localStorage;

import { data } from "./database.js";
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const person = data.find(
    (user) => user.login == input.value && user.password == password.value
  );
  if (!person) {
    alert("login yoki parol xato boshidan kiriting");
  } else {
    storage.setItem("token", JSON.stringify(person));
    window.location.replace("./site.html");
  }
});
