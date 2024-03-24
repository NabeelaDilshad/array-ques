// var arr = [ 3,6,1,9,5,7,3,9,2,6,3.23,3];
// var val =3

//  function findindex(arr,val){
//     let indexlist=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==val){
//             indexlist.push(i);
//        }
//     }
//     return indexlist;
// }
//     console.log(findindex(arr,val));


var arr = [ 3,6,1,9,5,7,3,9,2,6,3.23,3];
var val =3;
//output  [0,6,10,12]

function findindex( arr , value){
       const res = arr.reduce( ( acc, item , index) => {
         if( item == value) {
               acc.push(index);
               return acc;
         }
          return acc;
       }, [])
    console.log(res)
};

findindex(arr, val)



const res = arr.reduce( ( acc, item , index) => item == val ? [...acc, index] :[...acc]  ,[]);
console.log(res);


