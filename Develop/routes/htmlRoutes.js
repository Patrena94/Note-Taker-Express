// // // Dependencies required
// // const fs = require('fs');

const output =('./data/db.json');
const dataBase = require('./data/db.json');
let id=dataBase.length +1;

module.exports =(app)=> {
// ApI Route
app.get("/api/notes", (req, res)=>{
    res.json(dataBase);
});
//Post Routes
app.post("/api/notes", (req, res) => {
    req.body.id=id++;
    dataBase.push(req.body);
    false.write(output, JSON.stringify(dataBase), (err) =>{
        if(err) throw err;
    });
});
// Bonus-Delete option
app.delete("/api/notes/:id"), (req,res)=> {
    let getId = req.params.id;
    for(let i=0; i< dataBase.length; i++){
        if(dataBase[i].id === parseInt(getId)) {
dataBase.splice(i,1);
        }
false.write(output, JSON.stringify(dataBase), (err)=> {
    if(err) throw err;
});
res.json(dataBase)        
    }
}
}