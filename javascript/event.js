let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("HANDLER 1");
    let a=25;
    a++;
    console.log(a);
}
btn1.onclick=()=>{     //here we overide 1st event
    console.log("HANDLER 2");
    
}
let div=document.querySelector("div");
div.style.height="100px";
div.style.width="100px";
div.style.backgroundColor="pink";
div.style.color="white";
div.onmouseover=(e)=>{     //event object...
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX , e.clientY)
};


// Event Listener
let btn2=document.querySelector("#btn2");
btn2.addEventListener("click", ()=>{
    console.log("Button was clicked-HANDLER1");
    
});
btn2.addEventListener("click",()=>{
    console.log("Button was clicked-HANDLER2");
    
});
const evn3=()=>{
    console.log("Button was clicked-HANDLER3");
    
};
btn2.addEventListener("click",evn3);
btn2.addEventListener("click",()=>{
    console.log("Button was clicked-HANDLER4");
    
});
btn2.removeEventListener("click",evn3);


//Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode
//when clicked again.

let mode=document.querySelector("#mode");
let body=document.querySelector("body")
let currmode="light";
mode.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
})
