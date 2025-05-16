const output = document.getElementById("calculator__input");
const arrOperators = [];
let currentNumber = "";

function setNumber(number) {
  output.value += number;
  currentNumber += number;
}

function clearInput() {
  output.value = "";
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
      if (arrOperators[i] === ".") {
        result = parseFloat(arrNumbers[i] + "." + arrNumbers[i + 1]);
        arrNumbers.splice(i, 2, result);
        arrOperators.splice(i, 1);
      } else if (arrOperators[i] === "/") {
        if (arrNumbers[i + 1] === 0 || arrNumbers[i] === 0) {
          throw Error("Деление на 0");
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

    output.value = arrNumbers[0];
    currentNumber = arrNumbers[0];
  } catch (e) {
    output.value = e;
  }
}
