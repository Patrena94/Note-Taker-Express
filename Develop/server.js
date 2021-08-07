//Dependencies that are required.
const fs = require('fs');
const path = require('path')
const express = require('express');

const {notes} = require('./data/db.json');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes');
const { networkInterfaces } = require('os');
// const { Router } = require('express');
// const router =require('express')/Router();
const app = express();


// // parse incoming string or array data and incomint json
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);


app.get('/', (req, res) => {
 res.send ("Welcome to Note Taker");
});

app.get('/notes', (req, res) => {
    res.json(notes);
  });
app.get('/api/notes', (req, res) => {
    const notes=req.params.note
    for(let index=0; index< notes.length; index++) {
    if(notes[index].route.title===note){
        res.json(notes[index])
    }
    }
})
// router.get('*', (req, res)=> {
//     res.sendFile(pathy.join(__dirname, '../public/index.html'));
// });

// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'../public/index.html'));
// });
// router.get()

//Port Listener
app.listen(3001,()=>{
    console.log(`API server now on port 3001!`);
});

app.post('/api/notes', (req,res) => {
    // req.body.notes = notes.length.toString();
    // if(!validateNotes(req.body)) {
    //     res.status(400).send('note is not properly formatted.');
    // } else {
        // const notes = createNewNotes(req.body, notes);
        const createnewNote=req.body; notes.push(createnewNotes)
        return console.log("added new note:"+newNote.title)
        // console.log(req.body);
        // res.json(req.body);
// }
});
// app.delete('/', (req, res)=> {
//     res.send('Delete request to homepag')
// })
// // app.delete(pathm callback[, callback])