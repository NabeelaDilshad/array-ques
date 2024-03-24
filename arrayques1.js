const dropRight = (arr, num = 1) => {

  //  while(num>0){
  //   arr.pop();
  //    num--
  //  }



   // by for loop 
    for(i=num;i>0;i--){
     arr.pop()
     
}

     console.log(arr)

}
	
dropRight([1, 2, 3]) // [1,2]

dropRight([1, 2, 3], 2) // [1]

dropRight([1, 2, 3], 5) // []

dropRight([1, 2, 3], 0) // [1, 2, 3]


// / let n =1;
// while( n <= 10){
//       console.log(n);
//       n++;
// }

// for( var i = 1 ; i <= 10; i++){
//    console.log(i);
// }


// let n =10;
// while( n > 0){
//       console.log(n);
//       n--;
// }

// for( var i = 10 ; i > 0; i--){
//    console.log(i);
// }
