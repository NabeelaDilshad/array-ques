
// var num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// num.push(11);     // add item to end of array
// num.pop();        // remove item from end of array
// num.unshift(134)  // add item to start of array
// num.shift();      // remove the first item from start of array
// console.log(num)



// var num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // output [2 , 4 , 6, 8 , 10];  

// function even(arr){
//     let evenlist = [];
//     for( var i=0; i < arr.length; i++){
//      if(arr[i] % 2 == 0){
//           evenlist.push(arr[i]);
//      }
//     }
//     console.log(evenlist)

// };
// even(num);
// const res = num.filter( arr => arr% 2 == 0);
// console.log(ress)



// var a = [12,6,28,50,35,8]
// var b=[67,88,77,90,65,43]
// function maximum(arr){
//     let max=0;
    
//     for( var i=0;i< arr.length;i++){
//         if(max<arr[i]){
//             max=arr[i];

//         }
//     }
//     console.log(max)

// }

//    maximum(a)
//    maximum([9,25,87,99,89,76,54])
//    maximum(b)


// var num=[10,20,34,40,60,70,87,90]

//      let sum=0;
//      for(var i=0;i<num.length;i++){
//         if(i%2==0){
//             sum=sum+num[i];
//         }


//      }
//    console.log(sum)


    var num=[6,8,9,10,5,6,8,5,6,3,2,6,13,14,5,8,7,5,6,5]
    var bol = [true, false, false, true, false, true, true, false] 


    function repeated(num,target){
       let temp=0;
       for( var i=0;i<num.length;i++){
        if(num[i]==target){
            temp=temp+1
        }
       }
       console.log(temp)
    } 
    

    //   repeated(num,8)
    //   repeated(num,6)
    //   repeated(num,10)
        //   repeated(bol,true)

      
        // findrange(1,10)      [2, 3, 4, 5, 6 , 7, 8, 9]
        // findrange(10,16)    [11 , 12, 13, 14, 15]
        //  findrange(4,9)   //    [5 , 6, 7, 8
