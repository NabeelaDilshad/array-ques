// before using filter

const array1 = [1, 4, 9, 11, 12,13, 16];

let eventarray = [];
for(let i = 0; i < array1.length; i++){
     if(array1[i] % 2 === 0){
         eventarray.push(array1[i]);
     }
}
console.log(eventarray);

// after using filter

   const result =  array1.filter( element => element % 2 == 0);
   console.log(result)
