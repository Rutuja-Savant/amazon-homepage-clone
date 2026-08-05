   //Qs. Create a new button element. Give it a text “click me”, background color of red & text color

//of white.Insert the button as the first element inside the body


let newbtn=document.createElement("button");
newbtn.innerText="Click me..!";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";
document.querySelector("body").prepend(newbtn);


//Qs. Create a <p> tag in html, give it a class & some styling.
//Now create a new class in CSS and try to append this class to the <p> element.

//Solve this problem using classList.
//Did you notice, how you overwrite the class name when you add a new one?

let para=document.querySelector("p");
 let Class=para.getAttribute("class");
 console.log(Class);
//para.setAttribute("class" ,"newpara")
para.classList.add("newpara"); //using this we add two class style on one element
//para.classList.remove("newpara");//using this remove style