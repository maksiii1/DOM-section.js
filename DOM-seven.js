let square = document.getElementById("square2");

square.addEventListener("mouseover", () => {
  square.style.backgroundColor = "rgb(0, 255, 0)";
  square.style.cursor = "pointer";
});

square.addEventListener("mouseout", () => {
  square.style.backgroundColor = "rgb(255, 4, 0)";
});
