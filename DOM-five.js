let buttonOneSesction5 = document.getElementById("section-5__button");
let buttonTwoSesction5 = document.getElementById("section-5__button-2");
let inputSection5 = document.getElementById("section-5__input-1");

buttonOneSesction5.addEventListener("click", () => {
  inputSection5.setAttribute("disabled", "");
});

buttonTwoSesction5.addEventListener("click", () => {
  inputSection5.removeAttribute("disabled");
});
