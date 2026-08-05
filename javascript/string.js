// string in js sring are immutable means we can't change it
let str="Rutuja";
console.log(str);
console.log(str.length);
console.log(str[0]);

// template literal
let sentence=`this is Template Literal ${1+2+3}`;
console.log(typeof sentence);
console.log(sentence);
let obj={
    item:"pen",
    price:10,   

};
console.log("The cost of",obj.item,"is",obj.price);

//using template literal print obj vlaue

let output=`the cost of ${obj.item} is ${obj.price}`;
console.log(output);
console.log("Sam\tRutu")//using \t create space between two word
console.log("Samadhan\nRutuja");
let strs="    Samadhan   ";
console.log(strs);
console.log(strs.toUpperCase());
console.log(strs.trim());
console.log(strs.slice(0,7));
console.log(strs.concat(str));

//Start username with @, followed by their full name and ending with the fullname length.
//Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.

//eg: user name =“shradhakhapra”, username should be “@shradhakhapra13”
let fullname=prompt("enter fullname without spaces");
console.log(fullname);
let userName="@"+fullname+fullname.length;
console.log(userName);


