//console.log("hello how are you");
//console.log("hello how are you");
//console.log("hello how are you");
//console.log("hello how are you");
//console.log("hello how are you");

// for loop

// for(let i = 1; i<=5; i++){     i= initialision, i= stopping , i= updating
//    console.log("apna college");
//}

/////////////////////////

//for(let i= 1;  i<=5;  i++){
//    console.log("hello");
//}

//////////////////////

//let sum=0;
//for (let  i=0;  i<= 1000; i++){
// sum=sum+i;
   
//};
//console.log("sum= ",sum);
//console.log("looop is ended");

//////////////////


//let sum=0;
//let n=100;

//for( i=0; i<=n; i++){
//  sum=sum +i;
//}
//console.log(sum);

////////////////////

//for( let i=1;i<=5; i++){
 //   console.log("i= ", i);
//};
/////////////////


//infinte loop

//while loop               //
//while(condition){
    //do some work
//};



//let i= 1;
//while(i<=6){
  //  console.log("apna college");
 // i++;
//};


//               do-while loop /////


//do{
    //
//}while(condition);    
  //                       atlist 1st time run always

////




//            for-of loop               //for-of   //for-in


//for-in    help to apply on arrays and strings

// let str = "ApnaCollege";
// let size = 0;
// for(let val of str){       // helping for iterator -> characters     // for loop
//     console.log("val= ", val);
//     size++;
// }
// console.log("string size = ", size);




//       for-in   loop     //


// for(let key in )


// let student = {
//     name:"vikky singh",
//     age:20,
//     cgpa:7.5,
//     isPass:true
// };

// for(let key in student){
//     console.log("key= ", key ,"value= ",student[key]);
// }



///
//  question 1 ===write a code to print all even no from 0 to 100;

// for ( let i=0; i<=100;i++)
//     if(i%2===0){
//        console.log("i=",i);
//     }


// question 2 ===write a code to print all even no from 0 to 100;

// for ( let i=0; i<=100;i++)
//     if(i%2!==0){
//        console.log("i=",i);
//     }


// question 3 = 


let gameNum = 25;

let userNum = prompt("Guess the game number: ");

while(userNum != gameNum){ 
     //game
    userNum= prompt("you entered wrong number.Guess again: ")

}

console.log("congratulations, you entered the right number");