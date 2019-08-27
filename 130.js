const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

const DataBase = [];

app.post('/register', function (req, res) {
 //make 3 const from req
}

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});