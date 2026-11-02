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


