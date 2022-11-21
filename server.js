const express = require('express')
const cors = require('cors')
const db = require('./db/db')
const query = require('./db/query')
const presetData = require('./presetData')
const app = express()
const PORT = 8000

// json data has been removed and changed to a sqlite3 database


const episodes = {}

const soundtrack = {}

app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Characters JSON Object

app.get('/api',(req,res) => {
  res.json(presetData.endPoints)
})

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
          } else if (data.length > 0) {
            res.json(data);
            return;
          }
          res.json(presetData.unknown);
        }
      );
})

// Search by Id

app.get("/api/characters/:id", (req, res) => {
    const characterId = req.params.id;
    db.all(query.SELECTBYID, [characterId], (error, data) => {
      if (error) {
        console.log(error.message);
      } else if (data.length > 0) {
        res.json(data);
        return;
      }
      res.json(presetData.unknown);
    });
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})
