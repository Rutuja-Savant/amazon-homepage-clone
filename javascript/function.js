//function
function Myfun(msg){
    console.log(msg);
}
Myfun("welcome to JS");

// calculate sum using function
function Sum(a,b){   //here a and b are parameter inside function defination var are parameter variable
    add=a+b;        // a and b are local var. it have block scope only
    console.log("before return");
    return add;//here it return addition value outside the function

}
console.log(Sum(10,11));// here this value 10 and 11 are called argumate inside function called stmt is called argumate
let val=Sum(10,11);
console.log(val);

//Arrow function.....
// it is used for small work like addition multiplication functon

// function Mul(x,y){
//     m=x*y;
//     return m;
// }
const arrowmul=(x,y)=>{
    return x*y;

}



//Q.Create a function using the “function” keyword that takes a String as an argument &
//returns the number of vowels in the string.

function countvowel(str){
    count=0;
    for(const  char of str){
        if(
            char==="a"||
             char==="e"|| 
             char==="i"||
             char==="o"|| 
             char==="u"
            )
            {
            count++;
        }

    }
            return count;

}
console.log(countvowel("Rutuja"));
const vowel=(str)=>{
    count=0;
    for(const  char of str){
        if(
            char==="a"||
             char==="e"|| 
             char==="i"||
             char==="o"|| 
             char==="u"
            )
            {
            count++;
        }

    }
            return count;

}
console.log(vowel("Samadhan"));


// forEach loop in array....9Higher order function in js...

//Qs. For a given array of numbers, print the square of each value using the forEach loop.


let nums=[11,12,13,14,15];
nums.forEach((val)=>{
console.log(val**2)
});
let num=[11,12,13,14,15];
num.forEach((val,idx, num)=>{   //here in callback bracket we also take idx of particular
                                //element and array it's self  and  print using print stmt
console.log(val**2,idx,num)
});




// another way
let calsquare=(num)=>{    //this is arrow function
    console.log(num*num);
}
nums.forEach(calsquare);  //here we callback arrow function


//Map function:  it is used when we want to print new array

//Creates a new array with the results of some operation. The value its callback returns are
//used to form new array
 let arr=[11,22,33,44,55];
  let newarr= arr.map((val)=>{
                              return val*2;
                             })
console.log(newarr);   




// filter function.....
//Creates a new array of elements that give true for a condition/filter.
//Eg: all even elements

let arr1=[1,2,3,4,5,6,7,8,9];
let evenarr1=arr1.filter((val)=>{
    return val%2==0;

})
console.log(evenarr1);


//Reduce function....
//Performs some operations & reduces the array to a single value. It returns
//that single value.
//eg addition of array, average of mark
let Arr=[ 1,2,3,4];
const output=Arr.reduce((res,curr)=>{  //here res point to=>1 and curr point to=>2 i.e initial valuein array
    return res+curr;
})
console.log(output);



//Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
let marks=[91,95,88,85,83,90];
let Filter=marks.filter((val)=>{
    return val>90;
}
)
console.log (Filter);







//Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.


let n=prompt("enter the number");
let arrnum=[];
for(let i=1;i<=n;i++){
    arrnum[i-1]=i;
}
console.log(arrnum);

let sum=arrnum.reduce((res,curr)=>{
    return res+curr;
})
console.log(sum);

let mul=arrnum.reduce((res,curr)=>{
    return res*curr;
})
console.log(mul);

