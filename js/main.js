const storage = window.localStorage;
const userToken = storage.getItem("token");
let userData = null;
if (!userToken) {
  window.location.replace("./index.html");
} else {
  userData = JSON.parse(userToken);
}
