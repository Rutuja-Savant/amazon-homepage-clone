console.dir(document.body);// it print proprties
console.log(document.body);// it print html body
console.dir(document.body.childNodes[1]);
document.body.childNodes[3].innerText="New concept";// it changes node 3 text
let h1=document.getElementById("heading");
console.dir(h1);
console.log(h1);
let h=document.getElementsByClassName("myclass"); //It return HTML Collection which is similar to array
console.log(h);
console.dir(h);
let tag=document.getElementsByTagName("p");//it return HTML Collection
console.dir(tag);
let firstele=document.querySelector("p");
console.dir(firstele);
 let div=document.querySelector("div");//here inner text and inner HTML printed
 console.dir(div);
 let heading=document.querySelector("h3");//to print textcontent
 console.dir(heading);




 //Q Create a H2 heading element with text - “Hello JavaScript”

//Append “from Apna College

//students” to this text using JS.


let  h2=document.getElementById("h");// if we want selet particular tag then create id for it
                                    // here h2 tag is already used so we create id to assign property on
                                    //particular  tag
console.dir(h2.innerText);

h2.innerHTML=h2.innerText+"\tfrom Apana College";

let id=h2.getAttribute("id");  ///using this we access attribute value
console.log(id);
let id1=h2.setAttribute("id","new id"); //using this we change/set new id value
console.log(id1);


// Q.Create 3 divs with common class name - “box”

//. Access them & add some unique text to each of them.

let divs=document.querySelectorAll(".box");
console.dir(divs[0]);
console.dir(divs[0].innerText);
let idx=1;
for(div of divs){
    div.innerText=` new unique text ${idx}`;
    idx++;
}
let style= console.log(divs[0].style); //using this we access style in JS



// using dom crate element 


let newdiv=document.createElement("div");
//here we create  new div element using js
console.log(newdiv);
newdiv.innerHTML="<i>Hello!..</i>";
newdiv.style.fontWeight="bold";
newdiv.style.height="100px";   //here is styling...
newdiv.style.width="100px";
newdiv.style.backgroundColor="yellow";
newdiv.style.color="blue";
document.body.prepend(newdiv); // add ele at the top
newdiv.style.border="2px solid black";
console.log(newdiv);


let newbtn=document.createElement("button"); //create new buttton
newbtn.innerText="press me..!";
newbtn.style.backgroundColor="blue";
newbtn.style.color="white";
newdiv.after(newbtn);

let para=document.createElement("p");
para.innerHTML="<b> creating paragraph using javascript....!</b>";
newbtn.after(para);
// para.remove(); // using this we remove elemnt..


