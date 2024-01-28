//1) installing postman and express.js
//2) write first express app
//3) Static Files & Installing Pug template engine 
//4) Finishing off nodejs backend of our registration form
const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express();
const port = 80;
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For Serving Static File
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the view directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best cotent on the internet"
    const params = { 'title': 'PUBG is the best game', content: con }
    res.status(200).render('index.pug', params)
});
app.post('/', (req, res) => {
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `The name of the client is ${name},${age} years old, ${gender},residing at ${address},more about him/her:${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = { 'message': 'your form has been submitted successfully' }
    res.status(200).render('index.pug', params);
});

// // Our pug demo endpoint
// app.get('/demo', (req, res) => {
//     res.status(200).render('demo', { title: 'Hey max', message: 'Hello there!' })
//   })

// app.get("/",(req, res)=>{
//     res.send("this is homepage of my first express app");
// });
// app.get("/about",(req, res)=>{
//     res.send("this is aboutpage of my first express app");
// });
// app.post("/contact",(req, res)=>{
//     res.send("this is post contactpage of my first express app");
// });

// app.get("/this",(req, res)=>{
//     res.status(404).send("this page is not found");
// });

app.listen(port, () => {
    console.log(`application started successfully on port ${port}`);
});