console.log("hello");
setTimeout(()=>{
    console.log("Rutuja");
}, 2000);
console.log("just minute");


//call back
// function getData(dataId,getNextdata){
    
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextdata){
//             getNextdata();
//         }

//     },3000);

// }
 
// //callback hell.....
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     });//here we pass callback using array function it take time to execute
//})
// // update object using spread oprator
 const user={
    name:"rutuja",
    age:23
 };
 const updatedUser={
    ...user,
    age:24
 };
 console.log(updatedUser);
 const{age}=user;
 console.log(age);


 //promise
//  let promise=new Promise((resolve, reject)=>{
//     console.log("promise in js");
//     resolve("successfull");
//  });
 


 // in above callback hell eg. we use promise

//  function getData(dataId, getNextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("successfull");   // resolve fun is used
//             if(getNextdata){
//                 getNextdata();
//             }

//         },2000);
//     });
//  }


//  function getData(dataId, getNextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            // console.log("data",dataId);
//             reject("some error occured");   // reject fun is used
//             if(getNextdata){
//                 getNextdata();
//             }

//         },2000);
//     });
//  }




 //promise with then and catch block

//  const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("success");

//     });
//  };
// o
//  let promise=getPromise();
//  promise.then((res)=>{
//     console.log("promise fulfilled",res);
//  });

//  promise.catch((err)=>{
//     console.log("rejected",err);
//  })


//  // promise with then 

//  function asyncfunction1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
//  }

//  function asyncfunction2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
//  }


//  console.log("fetching data1");
//  let p1=asyncfunction1();   //here we also write this- asyncfunction1().then(res)=>{}
//  p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data2");
//     let p2=asyncfunction2();   //here we also write -asyncfunction2().then(res)=>{}
//          p2.then((res)=>{
//                console.log(res);
//             });
//  })

 //promise chain....

 function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("successfull");   // resolve fun is used
            

        },6000);
    });
 }
// getData(1).then((res)=>{
//    console.log(res);
//    getData(2).then((res)=>{
//       console.log(res);
//    });
// });
 //we also write this

 //promise chain

getData(1)
  .then((res)=>{
   return(getData(2))
  })
  .then((res)=>{
   return(getData(3))
  })
  .then((res)=>{
   console.log(res);
  })



  //async function always return promise

  async function getallData(){
   await getData(1);
   await getData(2);
   await getData(3);

  }

  
 