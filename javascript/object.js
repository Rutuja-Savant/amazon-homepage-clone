const student={
    fullname:"Rutuja",
    marks:85.20,
    printmarks: function (){
        console.log("marks=",this.marks);

    },
};
const Rutuja={
    class:"Btech"
};
Rutuja.__proto__=student;// using this assign student property
const user = { name: "Datta" };

const { country = "India" } = user;
console.log(user);
console.log(country);
console.log(user.country);
const{name}=user;
console.log(name)