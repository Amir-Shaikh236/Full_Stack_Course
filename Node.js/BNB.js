function Counter() {
    console.log('Counter Starts....');
    setTimeout(() => {
        let sum = 0
        for (let i = 0; i < 10000; i++) {
            sum += i
        }
        console.log('Task Finished');
        console.log('Result: ', sum);
    }, 0)
}
console.log('Before Calling Function');
Counter();
console.log('After calling Function');
