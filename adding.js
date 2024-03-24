var a = [1,2,3];
var b = [4,5,6];


function combinearray(arr1 , arr2){
      for(var i = 0; i < arr2.length; i++){
               arr1.push(arr2[i]);
      }
      console.log(arr1)
};

combinearray(a, b);

// using spread operator
    c=([...a,...b]);







 