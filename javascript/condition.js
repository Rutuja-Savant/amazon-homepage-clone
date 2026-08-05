//it stmt
let mode="blue";
let color;
if(mode==="dark"){
    color="black";
}
if(mode==="light"){
    color="white";

}
console.log(color);

//if else stmt
if(mode==="dark"){
    color="black";
}
else{
    color="white";

}
console.log(color);

// Q .ternary operator it work like if else stmt
let age=23;
let result=age>18?" adult":" not adult";
console.log(result);
 let name=prompt("hello");
 console.log(name);

 //take num from user and check it is multiple of 5 or not
 let num=prompt("enter num");
 if(num%5===0){
    console.log(num,"is multiple of 5")
 }
else{
    console.log(num,"is not multiple of 5");
}
//Q. check student grade according to score
 let score=88;
 let grade;
 if(score>=90 && score<=100){
    grade="A";
 }
 else if(score>=70 &&score<=89){
    grade="B";
 }
 else if(score>=60 &&score<=69){
    grade="c";
 }
 else if(score>=50 && score<=59){
    grade="D";
 }
 else{
    grade="F"
 }
 console.log(grade);

