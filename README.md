# Note Taker Starter Code
original db.json code:
[
    {
        "title":"Test Title",
        "text":"Test text"
    }
]

use the following codes from express guide to build code (convert to E6):
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
<!-- middleware functions (make sure to add id to db.json) -->
app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
<!-- if you get to the delete portion -->
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

