// 1. Substract (-) Operator
// if a string contains a valid numeric representation (e.g., 10), it converts to 10 with typeof of number.
// If atleast one value is a string contains non-numeric characters (e.g. "hello"), conversion fails and results in NaN (Not a Number).
// it will always return typeof "number" after performing action.

const TwoStr = 'Amir' - "Asgar"
console.log("Substract with Two String (non-numeric): ", TwoStr) // it will return NaN Because you cannot substract text from text
console.log('typeof of two String after substraction: ', typeof TwoStr);

const TwoNumStr = "15" - "5"
console.log("Substract with Two String (numeric): ", TwoNumStr); // it will console 10;
console.log('typeof of two Numeric String after substraction: ', typeof TwoNumStr);

const OneNumStr = 'Hello' - "6"
console.log("Substract with Two String:(one non-numeric) ", OneNumStr) // it will console NaN (Not a Number);
console.log('typeof of two Numeric String after substraction: ', typeof OneNumStr);

const OneNum = 7 - 6
console.log("Substract with Two String:(one non-numeric) ", OneNum)
console.log('typeof of two Numeric String after substraction: ', typeof OneNum);