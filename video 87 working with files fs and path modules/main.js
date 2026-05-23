const fs = require("fs")

// console.log(fs);

console.log("starting");

// fs.writeFileSync("bhavi.txt", "bhavi is a good boy")

// fs.writeFile("bhavi2.txt", "bhavi is a good boy", ()=>{
//     console.log("done");
//     fs.readFile("bhavi2.txt", (error, data)=>{
//         // console.log(error, data);// yeh buffer dehga padhne k liye string mai change karo
//         console.log(error, data.toString());  
//     })
// })      // yeh already chalne k liye schedule ho gya

    

fs.appendFile("bhavi2.txt", "Bhavi is master", (e, d)=>{
    console.log(e, d);
})

console.log("ending");