
// sevenBoom = (arr) => arr.join("").indexOf('7') >= 0 ? "Boom!" : "there is no 7"

sevenBoom = arr =>
    /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';


const res = sevenBoom([2, 55, 60, 97, 86])
const res2 = sevenBoom([2, 55, 60, 97, 86])
console.log(res)
console.log(res2)