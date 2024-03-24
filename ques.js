
const array1 = [1, 4, 9, 11, 12,13, 16];  // [4,12,16, 1,9,11,13]

// let b=[];
// let c=[];
// for(var i=0;i<array1.length;i++){
//     if(array1[i]%2==0){
//       b.push(array1[i])  
//     }
//     else{
//         c.push(array1[i])
//     }

// }
//    console.log( b.concat(c));


// using filter.....

   const result=array1.filter(element=> element%2==0);

   const result2=array1.filter(element=>element%2!==0);

//    console.log(result.concat(result2));


// using spread operator...
  console.log([...result,...result2]);