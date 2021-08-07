//Dependencies that are required.
const fs = require('fs');
const path = require('path')
const express = require('express');
const { Router } = require('express');

const {notes} = require('./data/db.json');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const { networkInterfaces } = require('os');
const { query } = require('express');
const { title } = require('process');

const app = express();


// // Middleware parse incoming string or array data and incoming json
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// // GET methods
// app.get('/', (req, res) => {
//  res.send ("Welcome to Note Taker");
// });

// app.get('/notes', (req, res) => {
//     res.send(notes);
//   });

//   app.get('/api/notes/:id', (req,res)=> {
//       res.send(notes[req.params.id]);
//   });


// // app.post('/api/notes', (req,res)=>{
// //     res.send('notes')
// // })

//Port Listener
app.listen(3001,()=>{
    console.log(`API server now on port 3001!`);
});
//   // POST Method Route
// app.post('/api/notes', (req,res) => {
//     req.body.id = notes.length.toString();
//     // If any data in req.body is incorrect, send error back
//     // if(!validateNotes(req.body)) {
//     //     res.status(400).send('note is not properly formatted.');
//     // } else {
//     //     const notes = createNewNotes(req.body, notes);
//         // const createnewNote=req.body; notes.push(createnewNotes)
//         // return console.log("added new note:"+newNote.title)
//         // console.log(req.body);
//         res.json(req.body.id, [notes]);
//     // }
// // }
// });
// // app.delete('/', (req, res)=> {
// //     res.send('Delete request to homepag')
// // })
// // // app.delete(pathm callback[, callback])