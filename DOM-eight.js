const container = document.querySelector("#squaresGroup");
let activeSquare = null;

for (let index = 0; index < 4; index++) {
  let square = document.createElement("div");
  square.className = "square3";
  container.appendChild(square);
}

container.addEventListener("click", (event) => {
  let target = event.target;

  if (!target.classList.contains("square3")) {
    return;
  }

  if (activeSquare) {
    activeSquare.classList.remove("section-8__switchColor");
  }

  target.classList.add("section-8__switchColor");
  activeSquare = target;
});
