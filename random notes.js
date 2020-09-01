// let obj= { a: 1, b: 2, c: 3, d: 4}

// let set1 = new Map(Object.entries(obj));

// // console.log(set1)

// set1.forEach((value, key) => {
//   console.log(`${key}=${value}`)
// });




// const setArr = new Set([2, 1, 2, 3, 2, 4]);
// console.log(setArr);

// // const arr = [...setArr];
// // console.log(arr);

// console.log(Array.from(setArr));

// let gfgSet = new Set(); 
// let gfgArray = []; 

// gfgSet.add("Geeks"); 
// gfgSet.add("for"); 
// // duplicate item 
// gfgSet.add("Geeks"); 

// // const someFunction = function( 
// // val1, val2, setItself) { 
// //     gfgArray.push(val1); 
// // }; 

// gfgSet.forEach((val1) =>  { 
//   gfgArray.push(val1);
// });

// console.log(gfgSet);

// const arr = [2, 1, 2, 3, 2, 4];

// arr.splice(arr.indexOf(2), 1)


// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// //var removed = arr.splice(2,2);

// var filteredArr = array.filter(function(value) {
//   return value > 5;
// });
// console.log(filteredArr);
// console.log(array);


// const arr = [1,2,3,4,5];

// console.log(arr.fill([1,2], 0,1));

// const arr = [1,2,3,4,5];

// function indexAndValue(arr) {
//   return arr.map((value,index) => {
//     return { value, index };
//   });
// };

// console.log(indexAndValue(arr));

// let str = "i am going";// to the movies today";

// arr = str.split(' ');


// for (i in arr) {
//   console.log(i);
// }

//console.log(arr);


function hi(...args) {
    return args;
}

console.log(hi('Hey, how are you?', 'yeah!', 'oh, okay'));