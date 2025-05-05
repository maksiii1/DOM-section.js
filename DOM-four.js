let sectionButton4 = document.getElementById("section-4__button");

sectionButton4.addEventListener("click", () => {
  let text1 = document.getElementById("section-4__input-1").value;
  let text2 = document.getElementById("section-4__input-2").value;

  if (!text1 || !text2) {
    alert("Введите текст!");
  } else {
    let copyText1 = text1;
    text1 = text2;
    text2 = copyText1;

    document.getElementById("section-4__input-1").value = text1;
    document.getElementById("section-4__input-2").value = text2;
  }
});
