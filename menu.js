var menuItem = document.querySelectorAll(".item-menu");

function selectedLink() {
  menuItem.forEach((item) => item.classList.remove("ativo"));
  this.classList.add("ativo");
}

menuItem.forEach((item) => item.addEventListener("click", selectedLink));

/////////////// EXpandir Menu /////////////////

var btnExp = document.querySelector("#btn-exp");
var menuSide = document.querySelector(".menu-lateral");

btnExp.addEventListener("click", function () {
  menuSide.classList.toggle("expandir");
});
