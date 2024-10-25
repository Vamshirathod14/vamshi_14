//does not wait for another stat ,and it executes parelly
console.log("first stat");
setTimeout(()=>{
    console.log("second stat");
},3000)

console.log("third stat");
 