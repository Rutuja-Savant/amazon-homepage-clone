// operator in JS
let a=10;
let b=2;
console.log("a=",a,"b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b),
a++;
console.log(a);

a--;
console.log(a);
console.log("b=",--b);
console.log("b=",b++); //here it not change it return change in next print stmt
console.log(b);
let x=5;
let y="5"; //string->number
//  console.log("x=",x,"y=",y);
// //console.log("x=",x+=1);
//  console.log("y=",x**=y);
console.log("x==y",x==y);
console.log("x!=y",x!=y);
console.log("x<=y",x<=y);
let cond1=x<y;
let cond2=x==y;
console.log ("cond1||cond2", cond1||cond2); 
console.log("!cond1=",!cond1);
 let mode="light";
let color;
if(  mode==="dark"){
    color="black";
}
if( mode==="light"){
    color="white";

}
console.log(color);
// let mode="dark";
// if(mode=="dark"){
//     console.log("black");
// }

let age=22;
if(age>18){
    console.log("you can vote");
}