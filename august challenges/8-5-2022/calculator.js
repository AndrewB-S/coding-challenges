//https://www.codewars.com/kata/583f158ea20cfcbeb400000a

function arithmetic(a, b, operator){
    switch (operator){
        case "add":
          return a + b
        break;
        case "subtract":
          return a - b;
        break;
        case "multiply":
          return a * b
        break;
        case "divide":
          return a / b
        break;
        default:
          return "not a valid operation";
    }
  }