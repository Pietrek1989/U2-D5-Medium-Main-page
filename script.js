const header = document.querySelector("header");
const button = document.querySelector("#button-to-change");

const headerChange = function () {
  if (window.pageYOffset > 500) {
    console.log("it went there");
    header.classList.add("scrolled-bg");
    button.classList.add("scrolled-button");
  } else if (window.pageXOffset < 500) {
    header.classList.remove("scrolled-bg");
    button.classList.remove("scrolled-button");
  }
};
let g = document.querySelectorAll("g path");
function setIntervalFunc() {
  let i = Math.floor(Math.random() * 275);
  if ((g[i].style.visibility = "visible")) {
    g[i].style.visibility = "hidden";
    g[i + 1].style.visibility = "visible";
  }
}

window.addEventListener("scroll", headerChange);
window.addEventListener("load", setInterval(setIntervalFunc, 100));
