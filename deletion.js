
var arr=[10,20,30,40,50,60,70,80,90,20,30,40,60,70]
// short form
let newuniqueArr=[...new Set(arr)];

    console.log(newuniqueArr);

    //new set(arr) is a set containing all the values in arr,which duplicates necessarily 
    // removed.
    // then the spread operator just convert this back into array




    // full detail
    function duplicateRemove(arr){
        let result = [];
        for(let i = 0; i < arr.length; i++){
               if(!result.includes(arr[i])){
                     result.push(arr[i]);
               }
        }
     console.log(result);
 };
 
 duplicateRemove(arr);