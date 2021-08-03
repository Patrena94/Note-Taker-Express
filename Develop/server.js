const express= require('express');
// may have to delete this file
const app = express();
const {db} = require('./db/db.json');
console.log("dfd")
app.get('/api/db', (req,res) => {
    let results =db;
    console.log(req.query)
    res.json(results);
});
app.listen(3001,()=>{
    console.log(`API server now on port 3001!`);
});