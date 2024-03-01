

//////////////////////////////////synchronous
// console.log("One");
// console.log("Two");
// console.log("Three");
// console.log("Four");


///////////////////////////asynchronous

// function hello(){
//     console.log("hello");

// }

////////////////////// setTimeout(hello, 4000);

// setTimeout(() =>{
//     console.log("hello");
// },4000); //timeout;

/////////////////////////////
//  console.log("One");
//  console.log("Two");
//  setTimeout(() =>{
//     console.log("hello");
// },4000); 
// console.log("Three");
//  console.log("Four");


////////////////////////////////////////////

// function sum(a ,b){
//     console.log(a + b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(1,2 ,(a,b) =>{
//     console.log(a+b);
// });

//////////////////////////////////////////////////
// const hello = () => {
//     console.log("hello");
// };

// setTimeout(hello,3000);


//////////////////////////////nested 

// for(let i=0; i<5; i++){
//     let str = "";
//     for(let j=0; j<5; j++){
//         str = str +j;
//     }
//     console.log(i,str);
// }
//////////////////////////////////
// function getData(dataId){
//     console.log("data", dataId);
// }

//////////////////////////////////////
// function getData(dataId){

//     setTimeout(() => {
//         console.log("data",dataId);

//     },2000);
// });
//}




// function getData(dataId, getNextData){
//     //2s
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }



// promise chain 

// getData(1)
// .then((res) =>{
//     return getData(2);
// })
// .then((res) => {
//     console.log(res);
// })
//.then((res) => {
//    console.log(res);
//});



// // callback hell
// getData(1, () =>{
//     getData(2,() => {
//         getData(3,()=>{
//             getData(4)
//         });
         
//     })
// });
///////////////////////////////Promises////////////////
// let promise = new Promise((resolve , reject) =>{
//     console.log("I am a promise");
//     //resolve(123);
//     reject("some error");
// });


/////////////////

// function getData(dataId, getNextData){
//     return new Promise((resolve , reject) =>{
//         setTimeout(() =>{
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },10000);
//     });
// }

/////////////////////////////////////

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//          resolve ("I am a promise");
//         ///reject(" network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) =>{
//     console.log("promise fullfilled",res);
// });
// promise.catch((err) => {
//     console.log("rejected",err);
// });

//////////////////////////////////promise chain/////////////
// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching data1.............");
// let p1 =asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data2...........");
//     let p2 =asyncFunc2();
//     p2.then((res) => {});
// });

//similar
//  console.log("fetching data1.............");
//asyncFunc1().then((res) => {
//  console.log("fetching data2...........");
//asyncFunc2().then((res) => {});
//});

///////////////////////////////////////////
// async function hello(){
//     console.log("hello");
// }
////////////////////////////////

function api(){
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api(1);
    await api(2);
    await api(3);
    await api(4);
    await api(5);
    await api(6);
    await api(7);
    await api(8);
    await api(9);
}