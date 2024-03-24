// find the factorial number
console.time()
 let factorial=1;
 let fact=20;

  if(fact==0){
    console.log('factorial of 0 is 1')
    
  }
  else if( fact<0){
    console.log('factorial is not possible')
  }
  else{
    for(i=1;i<=fact; i++){
        //condition for factorial 
        factorial=factorial*i;
        
    }
    console.log( factorial)
    
  }
 console.timeEnd()
