const path = require('path');
const express = require('express');
const app = express();

const port = 8080;

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact-me.html', (req, res) =>{
    res.sendFile(path.join(__dirname, '/contact-me.html'));
});
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '/404.html'));
});

app.listen(port, () =>{
    console.log("Server is listen at port:", port)
})