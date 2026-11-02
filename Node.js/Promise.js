const Multiplication = (numberOne, numberTwo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numberOne < 0 || numberTwo < 0) {
                reject('Numbers must be non-negative');
            }
            resolve(numberOne * numberTwo)
        }, 2000)
    });
}

Multiplication(5, 10)
    .then(result => {
        console.log('Multiplication Result: ', result);
    })
    .catch(error => {
        console.error('Error: ', error);
    })

Multiplication(-5, 10)
    .then(result => {
        console.log('Multiplication Result: ', result);
    })
    .catch(error => {
        console.error('Error: ', error);
    })