const express = require('express')
const cors = require('cors')
const db = require('./db/db')
const query = require('./db/query')
const app = express()
const PORT = 8000

// json data has been removed and changed to a sqlite3 database

const unknown = {
  name: "unknown",
  birthDate: "unknown",
  birthPlace: "unknown",
  species: "unknown",
  voiceActor: "unknown",
  image: "unknown",
  quote: "unknown",
};

const episodes = {}

const soundtrack = {}

app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Characters JSON Object

app.get('/api/characters',(req,res) => {
    db.all(query.SELECTALL, (error, data) => {
        if (error) {
          console.log(error.message);
        }
        res.json(data);
      });
})

// Search by Character

app.get('/api/characters/name/:name',(req,res) => {
    const characterName = req.params.name.toLowerCase()
    db.all(
        `SELECT * FROM characters WHERE name LIKE '%${characterName}%'`,
        (error, data) => {
          if (error) {
            console.log(error.message);
            return;
          } else if (data.length > 0) {
            res.json(data);
            return;
          }
          res.json(unknown);
        }
      );
})

// Search by Id

app.get("/api/characters/:id", (req, res) => {
    const characterId = req.params.id;
    db.all(query.SELECTBYID, [characterId], (error, data) => {
      if (error) {
        console.log(error.message);
        return;
      } else if (data.length > 0) {
        res.json(data);
        return;
      }
      res.json(unknown);
    });
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})
