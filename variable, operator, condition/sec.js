//console.log("Hello World");
// comments in Javascript 




// opertator in javascript 
// Used to perform some operation on Data


// Arthmetic Operatiors
//     +, -,  *,  /

 //let A = 2;
// let B = 4;

 //console.log("A + B = " , A + B);
 //console.log("B - A = " , B - A);
 //console.log("B * A = " , B * A);
 //console.log("B / A = " , B / A);
 //console.log("B % A = " , B % A);  /// remainder value is modulus 
 






// Modulus
// Exponentiation  power  **
 //console.log("B ** A = " , B ** A);
 // 

// Increment
// Unary Operator
 //let X = 5;
// let Y = 2;


// console.log("X= ", X, "& Y= ", Y)
//X++;
//--X;
//--X;

//console.log("X= ", X);// 6

// Decrement


//  X++ (post increment )
// --Y  (pre increment)



// Assignment Operator//   =, += , -=, *=, %=, **=   assign values
//   += ( a+=1,      a= a+1)   (a += 4,      a = a+4)
//let M = 5;
//M **=5;
//console.log("M=", M);




// Comparison Operators//   result always return in boolean value (True / False);
  //Equal to ==  ;  Equal to & type === ;  Not Equal to   !=;     Not Equal to & type !==
  // > ,>=, <, <=



  //let vikky = 1;
 // let singh = 2;
  //let singh = 1;    
 // console.log("1==2", vikky==singh);
  //console.log("1==1", vikky==singh);



  //let vikky = 1;        // number
  //let singh = "1";     //string
  //let singh = 1;    
 // console.log("1===1", vikky===singh);
  //console.log("1==1", vikky==singh);





  //Logical Operator
  //     AND    &&
  //     OR     ||
  //     NOT     !




  // conditional statements

// if statement
// if-else statement
let  kumar = 16;

if (kumar >= 18){
    console.log("vote");
}else {
    console.log("not vote");
}




//let num = 18;

//if(num%2 ===0){
 //   console.log(num," is even");
//} else{
//    console.log(num, " is odd");
//}





// else if statement

let mode ="dark";
let color;

if (mode === "dark"){
    color="black";   
}else if(mode === "blue"){
    color="blue";
}else if (mode === "pink"){
    color = "pink";
}else {
    color ="white";
}
console.log(color);//



//if (mode === "dark") console.log(mode);




//  Terary Operator 
// a ? b : c
// condition ? true output : false output


let hmm = 25;
let result = hmm >= 18 ? "adult" : "not adult";
//console.log(result);




let num= prompt("enter a number:");

if(num % 5 === 0){
    console.log(num," is multiple of 5");
}else{
    console.log(num," is  not multiple of 5");
};



let score;
let grade;

if(score >= 90 && score <= 100){
  grade ="A";

}else if(score >= 70 && score <= 89){
    grade = "B";
}else if(score >= 60 && score <= 69){
    grade ="C";
}  else if(score >= 50 && score <= 59){ 
    grade="D";
}else if(score >= 0 && score <= 49){
     grade = "F";
}
console.log("according to your score,your grade was ", grade) ;
