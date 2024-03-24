
// object store data in key and value pairs
// var a = {};
  
// var a = {
//      fullname :"nabeela dilshad ",
//      age :23,
//      address : "aligarh",
//      mobilenumber: 376253647532
// };

// console.log(a.mobilenumber)    // mobilenumber






// var a = {};
// a["fulname"] = "nabeela dilshad";
// or
// a.fullname = "nabeela dilshad";
// a.age = 23;
// a.address = "aligarh";
// a.mobilenumber = 376253647532;
// console.log(a)



// var a = {
//     fullname :"nabeela dilshad ",
//     age :23,
//     address : "aligarh",
//     mobilenumber: 376253647532
// };

// Object.keys(a);  // return the all key in the array
// Object.values(a); // return the all values in the array



// SUM THE ARRAY VALUES FUNCTION


// const person = {
//     isHuman: false,
//     userlist : [ 12, 43,546,77,88],
//     printIntroduction: function() {
//     }
//   };

// person.printIntroduction();

// let sum = 0;
// for(var i = 0; i < person.userlist.length; i++) {
//       sum += person.userlist[i];
// }
// person.userlist.forEach( item => {
//     sum += item;
// });

// console.log(sum);








var userlist = [
    { username:"mack", age:23},
    { username:"jack", age: 25},
    { username: "abdul", age:30},
    { username : "sam", age:35}
];
  
// PUSH THE ELEMENT WHICH HAS AGE GREATER THAN 25
let  Ages= [];
for(var i = 0; i < userlist.length; i++){
      if(userlist[i].age > 25){
        Ages.push(userlist[i]);
      }
};
console.log(Ages);



  // const filterarray =  userlist.filter( item => item.age > 25 );
  // console.log(filterarray);

  // const maparray =  userlist.map( item => item.age > 25 );
  // console.
