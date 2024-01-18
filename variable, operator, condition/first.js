console.log("hello world Im happy to seen this");
console.log(" hello vikky let enjoy 2024 in the new ways");
console.log(" start the javascript with new ")

fullname = "tony jacker",
//age = 24,
address = 277208
x = null;
y = undefined;
isFollow = true;
// Dyanically typed
//fullname = 25;


// assignment opertor =

FullName = "vikky";

//console.log(FullName);




// var , let , const

let fullName = "vikky kumar singh";
let age = 24;
let totalPrice = 1000;

console.log(fullName);


// var is not a good habit for re-declear and update ,global scope


// let can not re-reclear but update it block scope{}


{
    let a= 5;
    //let a =10;      can not define again in block 
    console.log(a);
}

{
    let a = 10;
    console.log(a);
}


// const can not re-declear not update it block scope{}




let a;
console.log(a);



///       Data Types of 

// primitive =7
// number
let year = 24;
console.log(year);
let day = 7;



// string


let name = "javascript"


// boolean   true / false



//undefined


//null

let z = null;    // typeof null        is object but primitive 




//Bigint
   


let b = BigInt("123");


//symbuls


//non-promitive    object (arrays, functions)


//object

const school = {
    rank:1,
    allOver:15,
    studentrank:12,
    cgpa:9.6,
    isPass:true,
};
//school["name "]= JNV;

school["allOver"] = school["allOver"]-3;    // for the update the value of variables
console.log(school["rank"]);
console.log(school.allOver);
console.log(school.name);




//practice

const product ={
    tittle:"Ball Pen",
    rating:4,
    offer:5,
    price:270,


};

console.log(product);



//profile

const profile = {
    userName:"___singh_vikky",
    isFollow:false,
    follower:123,
    following:123,
};
console.log(profile);
console.log(typeof profile["isFollow"]);





