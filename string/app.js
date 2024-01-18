// let str = "apna collage";




// console.log(str[0]); //a   //  space is also count 



//str.length   


//template literal 


// let specialString = `this is template literal`;
// console.log( typeof specialString);





// let obj ={
//     item:"pen",
//     price: 10,

// };




// let output = `the cost of ${obj.item} is  ${obj.price} rupess`;   // using template literal
// console.log(output);



// let sum = `sum of two number ${1 + 2 +3}`;
// console.log(sum);




//console.log("apna \n collage");               //  \n use for next line

// String methods in JS
//these are build-in functions to manipulate a string

/////////str.toUpperCase()
/////////str.toLowerCase()
///////////str.trim()          // removes whitespaces

// let str = "apna collage"
// str = str.toUpperCase();
// console.log(str);

////////////////string in javascript is immutable =>    not changeable


//////////////toLowerCase();
// let str = "Apna collage"
// str = str.toLowerCase();
// console.log(str);


/////////////trim methods ////////////



// let str = "       Apna College   Js ";
// console.log(str.trim());              // starting se and end se white space gayb ho jate h


// let str ="abcdefgh";
// console.log(str.slice(1, 5));

/////////////str.replace(searchVal, newVal)
// let str = "hello";
// console.log(str.replace("lo", "p"));

/////////////str.replaceAll(searchVal, newVal)

// let Str = "hellololololololo";
// console.log(Str.replaceAll("lo", "p"));



/////concat     joining two string

// let str= "vikky";
// let str1 ="singh";
// res= str.concat( str1);
// console.log(res);


// let fullName = prompt("enter the fullname without space");

// let userName =( "@" + "singhvikky" +fullName.length);
//   console.log(userName);
////////////////////////////////////////array/////////////////

// let hero = ["shradha","vinod","real","actor"];
// console.log(hero);
// console.log(hero.length);

// for (let idx = 0;idx < hero.length; idx++){
//   console.log(hero[idx]);
// }

// for (let name of hero){
//   console.log(name.toUpperCase());
// }



// let marks = [85, 97, 44,37,76,60];

// let sum = 0;

//  for (let val of marks){
//   sum+=val;

// }

// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);   



let items = [250, 645,300,900,50];

for(let i = 0; i<items.length; i++){
  let offer = items[i] / 10;
  items[i] -= offer;


}

console.log(items);