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
  const username = req.body.username;
  const password = req.body.password;
  const password2  = req.body.password2;

  //error handeling
}

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});