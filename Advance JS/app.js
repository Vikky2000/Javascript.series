// function hello() {
//     console.log("Hello Everyone");
// }

// setTimeout(hello,2000);
/////////////////////////////////////

// asynchronous/////

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("Hello Everyone");
// },5000);// timeout;

// console.log("three");
// console.log("four");

///////////////////////////

//callback
// function sum(a,b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a,b);
// }

// //calculator(1, 2, sum);    // function pass as argument 

//////////////////////////////////////////

// calculator(1 ,2, (a , b) => {
//     console.log(a + b);
// });

/////////////////////////////

// const hello = ()=> {
//     console.log("hello");
// };

// setTimeout(hello, 3000);
///////////////////

// setTimeout(()=> {
//     console.log("hello");
// } ,2000);


///////////////////////////////////////
 //callback Hell
 //nesting 

//  let age = 19;
//  if(age >= 18){
//     if(age >= 60){
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
//  } else {
//     console.log("child");
//  }

 //////////////

//  for(let i = 0; i< 5; i++){
//     let str ="";
//     for(let j= 0; j<5; j++){
//         str = str+j;
//     }
//      console.log( i, str);
//  }

/////////////////////

// function getData(dataId){
//     console.log("data " ,dataId);


// }
///////////////////////////////

// function getData(dataId, getNextData){

//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//         getNextData();
//         }
//     }, 2000);
// }

// //callback hell
// //getData(1, getData(2));  //replaced by next line

// getData(1, ()=>{ 
//      getData(2 ,()=>{
//         getData(3, ()=>{
//         getData(4);
//      });
//      });
// });



///////////////////////promise////////////

// let promise = new Promise((resolve, reject) =>{
//     console.log("I am a promise");
//     reject("success");
//     resolve("success");
// });
//////////////////////////////////////////
// function getData(dataId, getNextData){
//    return new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     }, 20000);
//    });
// };
/////////////////////////////////////  how to use the promise 

// .then() & .catch()
// Promise.then((res) => {...})

// Promise.catch((err)=>{...})

//////////////////////////////////////

// const getPromise = () => {
//     return new Promise((resolve, reject) =>{
//         console.log("I am a promise");
//         // resolve ("success");
//         reject("network error");
        
//     });
// };

// let promise = getPromise();
// // promise.then((res) =>{                
// //     console.log("promise fullfilled", res);
// // });

// promise.catch((err) => {
//     console.log("rejected",err)
// });


////////////////////////////////////////////////
//promise chain


// function asyncFunc1() {
//     return new Promise((resolve, reject) =>{
//        setTimeout( ()=>{
//         console.log("some data1");
//         resolve("success");
//        },4000);
//     });
// }


// function asyncFunc2() {
//     return new Promise((resolve, reject) =>{
//        setTimeout( ()=>{
//         console.log("some data2");
//         resolve("success");
//        },4000);
//     });
// }
// // console.log("fetching data1......");
// // let p1 = asyncFunc1();
// // p1.then((res) =>{
// //     console.log("fetching data2......");
// //     let p2 = asyncFunc2();
// //     p2.then((res)=>{})
// // });
// /////////////
// console.log("fetching data1......");
//  asyncFunc1().then((res) =>{
//     console.log("fetching data2......");
//     asyncFunc2().then((res)=>{})
// });


//////////////////////////////////////////////////////////

// async function hello(){
//     console.log("hello");
// }

/////////////////////////////////

function api() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000)
    });
    
}

     async function getWeatherData() {
        await api()
     }           //await api()   //api()