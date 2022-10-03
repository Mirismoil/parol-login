let login = document.querySelector(".wrapper-login");
let buttun = document.querySelector(".button");
let img = document.querySelector(".stop-img");
buttun.addEventListener("click", (e) => {
  login.style.display = "none";
  setTimeout(() => {
    img.style.display = "block";
  }, 100);
  setTimeout(() => {
    window.location.replace("./data.html");
  }, 1000);
});
