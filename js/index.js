// Your code goes here
// mouseover == event1
const header = document.querySelector("header");
const nav = document.querySelectorAll(".nav-link");
header.addEventListener("mouseover", function () {
  header.style.backgroundColor = "grey";
});

//keydown === event 2
document.addEventListener("keydown", function () {
  header.style.backgroundColor = "grey";
});
// wheel == event 3

document.addEventListener("wheel", function () {
  header.style.backgroundColor = "blue";
});

//mouse move === event 4

const selectText = document.querySelectorAll("p");
selectText.forEach(function (text) {
  text.addEventListener("mousemove", () => {
    text.style.fontSize = "1.8rem";
    text.style.color = "gold";
  });
});
// create prevent Defualt Script
document.querySelector(".nav").addEventListener("click", function (evt) {
  evt.preventDefault();
});

nav.forEach((nav) =>
  nav.addEventListener("click", function (e) {
    header.style.backgroundColor = "#5A6650";
    e.stopPropagation();
  })
);

//dbclick --  event ==5

const footerP = document.querySelector("footer p");
footerP.addEventListener("dblclick", () => {
  footerP.style.color = "red";
});

//loading  event == 6

window.addEventListener("load", function () {
  header.style.backgroundColor = "lightblue";
});

//scroll event ==event 7

window.addEventListener("scroll", function () {
  header.style.backgroundColor = "lightgreen";
});

// mouse leave == event 8

header.addEventListener("mouseleave", function () {
  header.style.backgroundColor = "gold";
});

// click == event 9

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener(
    "click",
    function () {
      header.style.color = "white";
      setTimeout(function () {
        header.style.color = "";
      }, 900);
    },
    false
  );
}

//dragstart --- event 10

document.addEventListener(
  "dragstart",
  (e) => (e.target.style.border = "3px solid black")
);