let question = prompt("Choose between add, sub, multi, div", "add");
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let result;
let operation;

if (question === "add") {
  result = num1 + num2;
  operation = "+";
} else if (question === "sub") {
  result = num1 - num2;
  operation = "-";
} else if (question === "multi") {
  result = num1 * num2;
  operation = "*";
} else if (question === "div") {
  result = num1 / num2;
  operation = "/";
} else {
  alert("Check your numbers and try again!");
}

alert(`${num1} ${operation} ${num2} = ${result}`);
