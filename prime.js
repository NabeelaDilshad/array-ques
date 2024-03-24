//program for prime number between an interval

let start  = 5;
let end  = 20 ;


for( let i = start ; i <= end ; i++ ){   // 5,6,7,8,9,10.....20
    // condition for prime numbers
    let temp = 0;

        for( let j = 2 ; j <= i -1; j++ ){
            // 2,3,4,5,6,.......19

           if( i % j == 0 ){
                 temp = temp + 1;
           }
     }
     if( temp == 0){
        console.log('number is prime ', i)
     }
      else{
        temp = 0;
      }
     
}