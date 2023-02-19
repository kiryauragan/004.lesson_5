let operation = prompt("Choose between add, sub, multi, div", 'add');
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;

  case "sub":
    result = num1 - num2;
    break;

  case "multi":
    result = num1 * num2;
    break;

  case "div":
    result = num1 / num2;
    break;

    default:
        alert("Not funny, enter some numbers!!!");
        break;
}

alert(`${num1} ${operation} ${num2} = ${result}`);
