const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const characters = {
    'bojack': {
        'name': 'BoJack Horseman',
        'birthDate': 'January 2nd, 1964',
        'birthPlace': 'San Francisco, California'
    },
    'diane': {
        'name': 'Diane Nguyen',
        'birthDate': 'March 19th, 1980',
        'birthPlace': 'Boston, Massachusetts'
    },
    'todd': {
        'name': 'Todd Chavez',
        'birthDate': 'April 15th, 1991',
        'birthPlace': 'Los Angeles, California'
    },
    'unknown': {
        'name': 'unknown',
        'birthDate': 'unknown',
        'birthPlace': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res) => {
    const characterName = req.params.name.toLowerCase()
    if (characters[characterName]) {
        res.json(characters[characterName])
    } else {
        res.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})
