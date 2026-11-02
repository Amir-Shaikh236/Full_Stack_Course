// 1. Substract (-) Operator
// if a string contains a valid numeric representation (e.g., 10), it converts to 10 with typeof of number.
// If atleast one value is a string contains non-numeric characters (e.g. "hello"), conversion fails and results in NaN (Not a Number).

// const TwoStr = 'Amir' - "Asgar"
// console.log("Substract with Two String (non-numeric): ", TwoStr) // it will return NaN Because you cannot substract text from text
// console.log('typeof of two String after substraction: ', typeof TwoStr);

// const TwoNumStr = "15" - "5"
// console.log("Substract with Two String (numeric): ", TwoNumStr); // it will console 10;
// console.log('typeof of two Numeric String after substraction: ', typeof TwoNumStr);

// const OneNumStr = 'Hello' - "6"
// console.log("Substract with Two String:(one non-numeric) ", OneNumStr) // it will console NaN (Not a Number);
// console.log('typeof of two Numeric String after substraction: ', typeof OneNumStr);

// const OneNum = 7 - 6
// console.log("Substract with Two String:(one non-numeric) ", OneNum)
// console.log('typeof of two Numeric String after substraction: ', typeof OneNum);


// 2. Addition (+) Operator
// Unlike the subtraction operator (-), which only does numeric subtraction, the + operator in JavaScript has a dual personality
// 1. Numeric Addition: If both values are numbers, it adds them together mathematically.
// 2. String Concatenation (Joining Text): If at least one value is a string, JavaScript converts the other value to a string as well and concat them

const TwoString = "10" + "10"
console.log("Addition with Two String: ", TwoString);
console.log('typeof of two String after addition: ', typeof TwoString);

const OneString = "10" + 10
console.log("Addition with One numeric String: ", OneString);
console.log('typeof of two after addition: ', typeof OneString);

// it's important to have all the values in numeric to perform addition otherwise it will convert and concat the values.
const TwoNumeric = 10 + 10
console.log("Addition with Two numeric: ", TwoNumeric);
console.log('typeof of two after addition: ', typeof TwoNumeric);


