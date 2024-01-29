


// function myFunction(msg){ //parameter ->
//     console.log(msg);
// }

// myFunction("I love JS");// argument



//////////////function  => 2 number, sum


// function sum(x,y){
//      s = x + y;
//      return s;
    
// }
// let val = sum(3,4);
// console.log(val); 

//////////////Arrow Function ///////////////
//constfunctionName = (param1, param2...)=> {
    // do some work
//}



// const sum = (a,b) => {
// console.log(a + b);

// }


// const mul = (a,b) => {
//     console.log(a * b);
    
// }
    
    
///////////////////
// function countVowels(str){
//     let count = 0;
//     for (const char of str){
//         console.log(char);
//         if(char === "a" || char ==="e" || char ==="i" || char==="o" || char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

//  in arrow function 
const countVow = (str) => {
    let count = 0;
    for (const char of str){
       if(
        char==="a"||
        char==="e"||
        char==="i"||
        char==="o"||
        char==="u"
        );
         {
        count++;
       }
        
    }
}


////////////////////////Foreach Loop In Arrays

//Array.forEach(callbackFunction)


// function abc(){
//     console.log("hello");

// }

// function myFunction(abc){
//     return abc;
// }

// A callback is a function passed as an argument to another function.


// let arr = [1, 2, 3, 4, 5];
// // arr.forEach(function printVal(val){
// //     console.log(val);
// // });

// arr.forEach((val)=> {
//     console.log(val);
// });


// let arr = ["pune","delhi","mumbai"];

// arr.forEach((val, idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);

// });

////////////////Higher order function / Higher order method => forEach


// let nums = [2, 3, 4, 5, 6];

// nums.forEach((num) => {
//     console.log(num*num); //num**2
// });

/////////////
// let nums =[7,8,9,10];
// let calcSquare = (num) => {
//     console.log(num * num);

// }
// nums.forEach(calcSquare);



//Some more Array Methods
// Map =>
// Create a new array with the results of some opertion .The value its Callback returns are used to form new array
// arr.map(callbackFnx(value,index,array))


// let newArr = arr.map((val)=>{
//     return val*2;
// });

//  let nums =[25,30,35,40,45];

//   let newArr = nums.map((val) =>{
//     return val*val;
    

//  });
//  console.log(newArr);

////////////////////////////////
//Filter Method


// let arr = [1, 2, 3, 4, 5 , 6, 7];

// let evenArr = arr.filter((val)=>{
//     return val % 2 !==0;
// });
// console.log(evenArr);


//////////

// let arr = [1,2,3,4,5,6,7];

// let evenArr = arr.filter((val) =>{
//     return val < 3;
// });
// console.log(evenArr);

//////////
  

////////////Reduce Method :___--

// let arr = [1,2,3,4];

// const output = arr.reduce((res, curr)=>{
//     return res + curr;
// });
// console.log(output);

///////////////

// let marks = [93,90,85,96,99,95,88,94];

// let toppers = marks.filter((val) =>{
//     return val > 95;
// });

// console.log(toppers);



////////////////

let n = prompt("enter a number : ");

let arr = [];
 for (let i = 1; i<= n; i++){
    arr[i -1] =i;

 }
 console.log(arr);

 let sum = arr.reduce((res,curr) =>{
    return res * curr;
 });
 console.log(sum);