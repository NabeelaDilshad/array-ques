//block of code design to perform particular task that can used in multiple time....function

function factorial(num) {
    let fact = 1;

    if (num == 0) {
        console.log("factorial is 1")
    } else if (num < 0) {
        console.log('factorial is not posssible')
    } else {
        for (var i = 1; i <= num; i++) {
            fact = fact * i;

        }
        console.log(fact)
    }

}

// factorial(8);
// factorial(5);
// factorial(-5);









    function factor(num){
        for(var i=2;i<num;i++){
        if(num%i==0){
            console.log("it is a factor of that num " + i)
        }
    }

    }

    // factor(12);











    function largest(num1,num2,num3){
       if(num1>num2 && num1>num3){
        console.log("largest num is " +num1)
        
       } 
       else if(num2>num3 && num2>num3){
        console.log("largest num is  " + num2)
       }
       else{
        console.log(" largest num is " + num3)
       }
    }
    // largest(7,8,9);
    // largest(19,76,88);










    function multiply(a, b){
        return a*b; 
  
 }

// let res = multiply(10,2)  
// console.log(res)


function multiply(a, b){
        return a*b; 
       
}

let res = multiply(10,2)  
console.log(res)
Faizuddin00:20
function add(a ,b){
       let c = multiply(a,b); 
       return a + b + c;
}

function multiply(a, b){
        return a*b; 
}

// const res = add(5,4);  
// console.log(res)  // 29






function num(arr1,arr2,){
      



}
    




add([1,2,3],[4,5,6])