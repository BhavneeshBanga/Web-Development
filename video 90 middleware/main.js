const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs")

const blog = require('./routes/blog')

app.use(express.static("public"));
app.use('/blog', blog)

//middleware 1
//next ka meaning agla middleware chalega
app.use((req, res, next) => {
    console.log(req.headers);
    req.bhavi = 'i am bhavi bhai'
    fs.appendFileSync("Logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send("HACKED!!")
    next();
})

//middleware 2
app.use((req, res, next) => {
    console.log('m2');
    next();
})              


// ----handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/about', (req, res) => {
    res.send('Hello about!' + req.bhavi);
});


app.get('/contact', (req, res) => {
    res.send('Hello contact!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});