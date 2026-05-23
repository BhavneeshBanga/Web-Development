// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('<h1> hey </h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express');
const app = express();
const port = 3000;



app.use(express.static('public'));

//app.get or app.post or app.put or app.delete
// (path, handler)
// app.get('/about', (req, res) => {
//   res.send('Hello about');
// });

// app.get('/contact', (req, res) => {
//   res.send('Hello contant');
// });

// app.get('/blog/intro-to-python', (req, res) => {
//     //logic to fetch intro to python frmom the db
//   res.send('Hello blogi');
// });

app.get('/blog/:slug', (req, res) => {
    //logic to fetch {slug} from the db
    console.log(req.params); // will output { slug: 'intro-to-india' }
    console.log(req.query); // will output { mode: 'dark', region: 'in' }
    res.send(`hello ${req.params.slug}`);
});
    


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
