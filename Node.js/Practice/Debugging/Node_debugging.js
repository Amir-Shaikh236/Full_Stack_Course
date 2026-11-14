import chalk from 'chalk'
// Debugging:
// Debugging is the process of identifying and fixing errors to ensure application runs smoothly.
// Node.js provides various built-in tools to help troubleshot and debug application efficiently.

// Ways to debug Node.js Application
// Although console.log() is useful for basic debugging
// advanced tools provide a more efficient and structured way to debug complex Node.js application.

// 1. console.log()
// It is useful for quick value check and tracing execution.
// Excessing Logging can clutter code and reduce readability.
// Logs alone are inefficient for debugging complex application.


// Debugging tools provide breakpoints and step-by-step execution.
// Advanced tools enable call stack analysis and variable inspection.

// 2. V8 Inspector

const sum = (a, b) => {
    return a + b
}

console.log(sum(5, 10))

// Step 1: node --inspect-brk filename.js



// Changing text color in Node.js console Using Chalk Library
// chalk is a popular and flexible NodeJS library that allows you to style strings in the console.
// It provides a range of colors and styles to format your console output.

console.log(chalk.green('Success: Everything is working fine!'));
console.log(chalk.yellow('Warning: Please check your input.'));
console.log(chalk.red('Error: Something went wrong.'));


