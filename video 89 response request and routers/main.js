const express = require('express');
const blog = require('./routes/blog')
const shop = require('./routes/shop')


const app = express();
const port = 3000;


app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)


app.get('/', (req, res) => {
    console.log('hey hits a gets request');
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    console.log('hey hits a post request');
  res.send('Hello World popst');
});

app.put('/', (req, res) => {
    console.log('hey hits a put request');
  res.send('Hello World PUT REQUEST');
});

app.get('/index', (req, res) => {
    console.log('hey hits a index');
//   res.send('Hello World index');
    res.sendFile('templates/index.html', {root : __dirname})
});

app.get('/api', (req, res) => {
    res.json({a : 0 , b : 1, c : 2 , d : 3 , e : 4,  name : ['bhavi', 'banga']});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});