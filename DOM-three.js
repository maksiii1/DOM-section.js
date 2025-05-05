let button = document.getElementById("button-three");

button.addEventListener("click", () => {
  let value = document.getElementById("input-value").value;

  if (!value) {
    alert("Вы ничего не ввели!");
  } else {
    alert(`Вы ввели ${value}`);
  }
});
