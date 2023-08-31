const express = require('express')
const port = 5000

const app = express()

app.use(express.json())

app.use(express.urlencoded())

app.use(express.static(__dirname + "/"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aaditya1234",
  database: "demo"
});

app.post('/formPost', (req, res) => {
    const rollNo = req.body.rollNo
    const game = req.body.game
    const fees = req.body.fees
    console.log(rollNo + " " + game + " " + fees);
    con.connect(function(err) {
        if (err) throw err;
        con.query(`INSERT INTO STUDENT (Roll_no, Game, Fees) VALUES (${rollNo}, "${game}", ${fees});`, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
    res.sendFile(__dirname + '/thanks.html')
})
