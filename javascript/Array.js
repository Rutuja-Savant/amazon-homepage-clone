// Array is a collection of same data type .It is a linear way to store info
// Array in js are mutable means we can change its value
let marks=[91,82,43,86,93,88];
console.log(marks);
console.log("mark array length",marks.length);//here length is a property it return only value,but method are
                                              // are diff because it works
let heros=["ironman"," hulk","shaktiman", "spiderman","thor","antman"];
// print array lement using for loop
for(let idx=0;idx<=heros.length;idx++)
{
    console.log(heros[idx]);
} 

//now print array element using "for of loop"

for(let hero of heros){
    console.log(hero);
}

//print city using for of in upper case letter

let citys=["Delhi","Pune","Mumbai","Goa","Nagpur"];
for(let city of citys ){
    console.log(city.toUpperCase());
}

//Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.

let stdMarks=[85,97,44,37,76,60];
 let sum=0;
for( let i of stdMarks){
    sum=sum+i;
}
let average=sum/stdMarks.length;
console.log(`average mark= ${average}`);



//Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price after
//applying offer.
let item=[250,645,300,900,50];
for(let i=0;i< item.length;i++){
    let offer=item[i]/10;
    item[i]-=offer;
}
console.log(item);


// string method
let veggies=["potato","tomato","onion","flawer","bringal"];
veggies.push("chilly","shimala");
console.log(veggies);
console.log("deleted",veggies.pop());// here ele are deleted at the end of array
console.log(veggies);
console.log(veggies.toString());
let fooditem=["chipes","pizza","maza"]
console.log(veggies.concat(fooditem));
fooditem.unshift("Burgar");
console.log(fooditem);
console.log(veggies.slice(0,2)); 
console.log(fooditem.splice(0,2,"chinees","manchurian"));//it show which element we remove using splice
console.log(fooditem);//here it show updated array

// Qs. Create an array to store companies -> “Bloomberg”
// ,
// “Microsoft”
// ,
// “Uber”
// ,
// “Google”
// ,
// “IBM”
// ,
// “Netflix”

// a. Remove the first company from the array

// b. Remove Uber & Add Ola in its place

// c. Add Amazon at the end

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","NetFlix"];
console.log(companies);
companies.shift();
console.log(companies); 
companies.splice(1,1,"Ola");
console.log(companies);   
companies.push("Amazon");
console.log(companies);

