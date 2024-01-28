const express = require('express');
const path = require("path");
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
    const params = { 'title': 'PUBG is the best game' }
    res.status(200).render('index.pug', params)
});

app.listen(port, () => {
    console.log(`application started successfully on port ${port}`);
});