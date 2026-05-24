const express = require('express');
const app = express();
const port = 3000;



app.set('view engine','ejs')


// ----handler
app.get('/', (req, res) => {
    let sitename = "Adidas why and when?"
    let searchtext = "Its a very good brand";
    res.render("index", {sitename : sitename, searchtext : searchtext})
});


app.get('/', (req, res) => {
    let blogtitle = "Adidas why and when?"
    let blogContent = "Its a very good brand";
    res.render("blogpost", {blogtitle : blogtitle, blogContent : blogContent})
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