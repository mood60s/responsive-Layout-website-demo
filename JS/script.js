const burgerIcon = document.querySelector(".burger-icon");
const li = document.querySelector(".navbar li:last-child");
function addClass(e) {
  e.target.parentElement.classList.contains("active")
    ? e.target.parentElement.classList.remove("active")
    : e.target.parentElement.querySelector("ul").classList.toggle("active");
  document.body.classList.toggle("ulActive");
}
burgerIcon.addEventListener("click", (e) => addClass(e));
li.addEventListener("click", (e) => addClass(e));
