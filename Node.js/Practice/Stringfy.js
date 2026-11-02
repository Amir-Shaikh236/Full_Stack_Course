const data = [
    { id: 1, name: 'Amir' },
    { id: 2, name: 'Asgar' },
]
console.log(typeof data);

const convertData = JSON.stringify(data)

console.log('what stringify did: ', typeof convertData)
console.log("String Data: ", convertData)

const parsedData = JSON.parse(convertData)
console.log('what Parse did: ', typeof parsedData)
console.log('Parsed Data: ', parsedData)


// what of we passed string data to the stringify();

const ConvertThis = JSON.stringify(convertData)
console.log(ConvertThis)
// this will adding slash "\" after every string.

// const ConvertObj = JSON.parse(parsedData)
// console.log(ConvertObj)
// this will throw a syntax error: [Object Object] is not a valid Json.


