// const student = {
//     fullName:"shradha khapra",
//     marks:94.4,
//     printMarks:function(){
//         console.log("marks = ", this.marks);
//     },
// };
const employee = {
    calcTax1(){
        console.log("tax rate is 10%");
    },
    // calvtax2 :function(){
    //     console.log("tax rate is 20%");
    // }
};

const karanArjun = {
    salary:50000,
    calcTax1(){
        console.log("tax rate is 20%");
    },
};

karanArjun.__proto__ = employee;



// ************ if object & prototype have same method,
//////  object's method will be used.


///////////////Class//////////// & ///////constuctor  /////////////

class ToyotaCar {

    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage=mileage;
    }
    start(){
        console.log("start");

    }

    stop(){
        console.log("stop");
    }


    // setBrand(brand){
    //     this.bandName = brand;
    // }
}

let fortuner = new ToyotaCar("fortuner", 10); // constuctor
console.log(fortuner);
//fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus",12);// constuctor
//lexus.setBrand("lexus");
console.log(lexus);


/////////////inheritance   ///////////// programming concepts/////
// class Parent {
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent {}

// let obj = new Child();


//////////////////////////////
// class Person{

//     constructor(){
//         this.species ="homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");

//     }
// }
// class Engineer extends Person {
//     work(){
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person {
//     work(){
//         console.log("treat patients");
//     }
// }
// let vikkyObj = new Engineer();



////////// Super Keyword //////////////////
// class Person{
//     constructor(){
//         console.log("enter Parent constructor");
//         this.species = "homo sapiens";

//     }
//     eat(){
//         console.log("eat");
//     }
// }
// class Engineer extends Person {
//     constructor(branch){
//         console.log("enter child constructor");
//         super()// to invoke parent class constructor
//         this.branch =branch;
//         console.log("exit child constructor");

//     }
//     work(){
//         console.log("solve problem, build something");

//     }
// }
// let engObj = new Engineer("chemical engg");


/////////////////////////////Practice  1 /////////////

//  let DATA = "secret information";

//  class User{
//     constructor(name,email){
//         this.name= name;
//         this.email=email;
//     }

//     viewData(){
//         console.log("data= ", DATA);
//     }
//  }
//  let student1 = new User("shradha","abc@email.com");
//  let student2 = new User("aman", "aman@email.com");


 //////////////////222222222222222222222/////////////////
 
 let DATA = "secret information";

 class User{
    constructor(name,email){
        this.name= name;
        this.email=email;
    }

    viewData(){
        console.log("data= ", DATA);
    }
 }
 class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA ="some new value";
    }
 }
 let student1 = new User("shradha","abc@email.com");
 let student2 = new User("aman", "aman@email.com");
 let admin1 = new Admin("admin","admin@gmail.com")




 ////////////////////error handling//////////
 //try-catch

 try{
    --normal code---
 }catch(err){// err is error object
    --handling error--

 }