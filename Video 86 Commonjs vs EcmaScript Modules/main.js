// const { createServer } = require('node:http');
// const fs = require("fs")        //common js ki help se import kar rha hai
// import http from "http"
// import {a, c, d} from "./mymodules.js"
// import obj from "./mymodules.js"
// console.log(a, c, d);



// return

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// console.log(obj);


const a = require("./mymodule2.js")
console.log(a);
