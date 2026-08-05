// for loop.......

//print 1 to 10 num using for loop
for(let num=1; num<=10;num++){
    console.log(num);
    
}


// calculate sum of n number
let n=prompt("enter num");
let sum=0;
for(let i=1; i<=n ;i++){
   sum=sum+i;
}
console.log("sum=",sum); 


// while loop............

//print i value using while loop
let i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}

// do while loop......

//in do while loop if condition is false then loop exicute atleast once
let j=1;
do{
    console.log("j=",j);
    j++;
}while(j>=10);


// for of loop
 
//print string  element using for of loop
let str="SamadhanRutuja";
let size=0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("size of string",size);

// for in loop

//it is used for object
//using this we can access object key and value also
let student={
    name:"Rutuja",
    age:23,
    cgpa:8.2,
    ispass:true,
};
for(let key in student){
    console.log("key=", key,"value=",student[key]);
}

//print all even num from 0-100
let totalEnum=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log("even num=",i);
         totalEnum++;
    }
   
}
console.log("total even num="+totalEnum);
let totalOnum=0;
for(let i=0;i<=100;i++){
    if(i%2!==0){
        console.log("odd num=",i);
         totalOnum++;
    }
   
}
console.log("total odd num="+totalOnum);


    // print num using user
    let gamenum=25;
    let usernum=prompt("Guess the gamenum")
    while(usernum !=gamenum){
        usernum=prompt("you enterd wrong num. guess again");
    }
    console.log("Congretulation you guess correct num");