let btn6 = document.getElementById("section-6__button");

btn6.addEventListener("click", () => {
  let square = document.getElementById("square");

  if (square.style.display == "none") {
    square.style.display = "block";
    btn6.textContent = "Скрыть квадрат";
  } else {
    square.style.display = "none";
    btn6.textContent = "Показать квадрат";
  }
});
