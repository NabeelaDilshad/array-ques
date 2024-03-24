
var stud = [ "mack", "jack",'json', "addul", "head"];

// for( var i = 1 ; i < stud.length; i++){
//      console.log(stud[i]);
// }

// for( var item of stud) {
//    console.log(item);   // sirf element chahiye hume tb use krenge ab
// }


// // forEach loop 
// function getitem(element){
//    console.log(element);
// }
stud.forEach(function(item){
   console.log(item);
})

stud.forEach( (item, index, arr) => {
   console.log(item, index, arr)
} 







var listofusers = [ 'john','mack','fred', 'look', 'andul',
 'aanad', 'raksesh', 'look','mack','look'];

function usercount(arr, target){
             let count  = 0;

    // ALSO WRITTEN AS arr.forEach(function(element )){}
             arr.forEach( element => {     // arrow function  
                 if( element == target){
                        count = count + 1;
                 } 
             });

             // normal forloop 

            //  for( var i = 0; i < arr.length; i++){
            //      if( arr[i] == target){
            //