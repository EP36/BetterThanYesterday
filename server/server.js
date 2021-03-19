const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/build/'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname + 'build/index.html');
});

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.post('/', function (req, res) {
//   res.send('Got a POST request')
// })

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user')
// })

app.listen(port, () => {
  console.log(`BetterThanYesterday listening at http://localhost:${port}`)
});