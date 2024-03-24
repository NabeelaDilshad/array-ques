// if condition using ternary operator

const array1 = [1, 4, 9, 11, 12,13, 16];

let b = [];
array1.forEach( item => {
       item % 2 == 0 ?  b.push(item) : ''
});
console.log(b);