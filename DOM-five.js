let buttonOneSesction5 = document.getElementById("section-5__button");
let buttonTwoSesction5 = document.getElementById("section-5__button-2");

buttonOneSesction5.addEventListener("click", () => {
  document.getElementById("section-5__input-1").setAttribute("disabled", "");
});

buttonTwoSesction5.addEventListener("click", () => {
  document.getElementById("section-5__input-1").removeAttribute("disabled");
});
