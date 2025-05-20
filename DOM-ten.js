const output = document.getElementById("calculator__input");
let arrOperators = [];
let currentNumber = "";

function setNumber(number) {
  if (output.value === "Деление на 0") {
    output.value = number;
    currentNumber = number;
    arrOperators = [];
  } else {
    output.value += number;
    currentNumber += number;
  }
}

function clearInput() {
  output.value = "";
  currentNumber = "";
}

function setOperator(operator) {
  arrOperators.push(operator);
  output.value += operator;
  currentNumber += ",";
}

function getResult() {
  const arrNumbers = currentNumber.split(",").map(Number);
  let result = 0;
  let i = 0;

  try {
    while (i < arrOperators.length) {
      if (
        arrOperators[i] === "." ||
        (arrOperators[i + 1] === "." && arrNumbers[i + 1] === 0)
      ) {
        if (arrOperators[i + 1] === "." && arrNumbers[i + 1] === 0) {
          result = parseFloat(arrNumbers[i + 1] + "." + arrNumbers[i + 2]);
          arrNumbers.splice(i + 1, 2, result);
          arrOperators.splice(i + 1, 1);
        } else {
          result = parseFloat(arrNumbers[i] + "." + arrNumbers[i + 1]);
          arrNumbers.splice(i, 2, result);
          arrOperators.splice(i, 1);
        }
      } else if (arrOperators[i] === "/") {
        if (arrNumbers[i + 1] === 0) {
          throw new Error("Деление на 0");
        }
        result = arrNumbers[i] / arrNumbers[i + 1];
        arrNumbers.splice(i, 2, result);
        arrOperators.splice(i, 1);
      } else {
        i++;
      }
    }

    i = 0;
    while (i < arrOperators.length) {
      if (arrOperators[i] === "+" || arrOperators[i] === "-") {
        if (arrOperators[i] === "+") {
          result = arrNumbers[i] + arrNumbers[i + 1];
        } else {
          result = arrNumbers[i] - arrNumbers[i + 1];
        }
        arrNumbers.splice(i, 2, result);
        arrOperators.splice(i, 1);
      } else {
        i++;
      }
    }

    output.value = arrNumbers[0].toFixed(2);
    currentNumber = arrNumbers[0].toFixed(2);
  } catch (e) {
    output.value = e.message;
  }
}
