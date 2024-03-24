   var userlist = [
        { username:"mack", age:23, location: 'india'},
        { username:"jack", age: 25, location: 'india'},
        { username: "abdul", age:30, location: 'india'},
        { username : "sam", age:35, location: 'india'}
    ];

    function isIndia(userlist){
        let isU =true;
        userlist.forEach (item => {
         if( item.location  !== 'india'){
              isU = false;}  
         }  )
        return isU;
    
    };

     const r = isIndia(userlist);
    console.log(r)
    

//   BY USING EVERY
    
    // const isindian = userlist.every( item => item.location == 'india');
    // console.log(isindian)
    