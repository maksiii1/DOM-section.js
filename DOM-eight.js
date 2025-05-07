let container = document.getElementById("squaresGroup");
let activeSquare = null;

for (let index = 0; index < 4; index++) {
  let containerSquare = document.createElement("div");
  containerSquare.className = "square3";
  container.appendChild(containerSquare);
}

container.addEventListener("click", (event) => {
  let target = event.target;

  if (target.classList.contains("square3")) {
    if (activeSquare) {
      activeSquare.style.backgroundColor = "rgb(255, 0, 0)";
    }

    target.style.backgroundColor = "rgb(0, 248, 41)";
    activeSquare = target;
  }
});
