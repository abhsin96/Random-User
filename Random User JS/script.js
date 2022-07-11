const btnAge = document.getElementById("age");
const btnEmail = document.getElementById("email");
const btnPhone = document.getElementById("phone");
const btnUserDetail = document.getElementById("getUser");
var section = document.querySelector("section");
const API_URL = "https://randomuser.me/api/";
let result;

btnUserDetail.addEventListener("click", () => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => updateHTML(data));
  const div = document.createElement("div");
  const btnAge = createElement("button");
  const btnEmail = createElement("button");
  const btnPhone = createElement("button");
});

function updateHTML(data) {
  result = data.results[0];
  console.log(data.results[0]);
  section.innerHTML = `<p>Name : ${data.results[0].name.first} ${data.results[0].name.last}</p><br>
  <img src="${data.results[0].picture.large}"/>
  <h2>Additional Info</h2>
  `;
}

btnAge.addEventListener("click", () => {
  console.log("hi");
  section.innerHTML = `
  <p>Name : ${result.name.first} ${result.name.last}</p><br>
  <img src="${result.picture.large}"/>
  <h2>Additional Info</h2>
  Age : ${result.dob.age}`;
});

btnEmail.addEventListener("click", () => {
  section.innerHTML = `
  <p>Name : ${result.name.first} ${result.name.last}</p><br>
  <img src="${result.picture.large}"/>
  <h2>Additional Info</h2>
  Email ID : ${result.email}`;
});

btnPhone.addEventListener("click", () => {
  section.innerHTML = `
  <p>Name : ${result.name.first} ${result.name.last}</p><br>
  <img src="${result.picture.large}"/>
  <h2>Additional Info</h2>
  Phone No : ${result.phone}`;
});
