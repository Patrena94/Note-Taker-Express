git//Dependencies that are required.
const fs = require('fs');
const path = require('path')
const express = require('express');
const { Router } = require('express');

const {notes} = require('./data/db.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const { networkInterfaces } = require('os');
const { query } = require('express');
const { title } = require('process');

const app = express();


// // Middleware parse incoming string or array data and incoming json
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// functions
function createNewNote(body, notesArray){
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(path.join(__dirname,'./data/db.json'),
    JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
}
function validateNote (note){
    if(!note.title || typeof note.title !== 'string'){
        return false;
    }
    if(!note.text || typeof note.text !=='string'){
        return false;
    }
    return true;
    }
function filterbyQuery(query, notesArray) {
    let title=[];
    if(query.title){
        if(typeof query.title ==='string'){
         } else {
                title=query.title;
            }
            title.forEach(title =>{
                filteredResults = filteredResults. filter(notes=>
                    notes.title.indexof(title)!== -1);
                });
            }
        return filteredResults;
    }
    
function findById(id, notesArray){
    let result = notesArray.filter(note => notes.id===id)[0];
    return result;
}

// // GET methods
app.get('/api/notes', (req, res) => {
    res.send(notes);
  });

  app.get('/api/notes/:id', (req,res)=> {
      let result=findById(req.params.id, notes);
      if(result){
          res.json(result);
      } else {res.send(44);
    }    
      });

//Port Listener
app.listen(3001,()=>{
    console.log(`API server now on port 3001!`);
});
  // POST Method Route
  
app.post('/api/notes', (req,res) => {
    req.body.id = notes.length.toString();
    // // If any data in req.body is incorrect, send error back
    if(!validateNote (req.body)) {
        res.status(400).send('note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
   
        res.json(req.body);
    }
// // }
});
// // app.delete('/', (req, res)=> {
// //     res.send('Delete request to homepage')
// // })
// // // app.delete(pathm callback[, callback])