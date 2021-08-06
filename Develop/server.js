const fs = require('fs');
const path = require('path')
const express = require('express');
const {db} = require('./data/db.json');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const app = express();

app.get('/', (req, res) => {
 res.send ("Welcome to Note Taker");
});

app.get('/notes', (req, res) => {
    res.json(notes);
    // console.log(req.query)
  });

app.listen(3001,()=>{
    console.log(`API server now on port 3001!`);
});
app.post('/api/notes', (req,res) => {
    req.body.title = notes.length.toString();
    if(!validateNotes(req.body)) {
        res.status(400).send('note is not properly formatted.');
    } else {
        const notes = createNewNotes(req.body, notes);
        res.json(notes);
    }
})