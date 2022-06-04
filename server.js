const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const characters = {
    'bojack': {
        'name': 'BoJack Horseman',
        'birthDate': 'January 2nd, 1964',
        'birthPlace': 'San Francisco, California',
        'species': 'Horse',
        'voiceActor': 'Will Arnett',
        'quote': `You know, sometimes I think I was born with a leak, and any goodness I started with just slowly spilled out of me and now it's all gone. And I'll never get it back in me. It's too late. Life is a series of closing doors, isn't it?`
    },
    'diane': {
        'name': 'Diane Nguyen',
        'birthDate': 'March 19th, 1980',
        'birthPlace': 'Boston, Massachusetts',
        'species': 'Human',
        'voiceActor': 'Alison Brie',
        'quote': `There's no such thing as "bad guys" or "good guys." We're all just guys who do good stuff sometimes and bad stuff sometimes. And all we can do is try to do less bad stuff and more good stuff, but you're never going to be good. Because you're not bad. So, you need to stop using that as an excuse.`
    },
    'todd': {
        'name': 'Todd Chavez',
        'birthDate': 'April 15th, 1991',
        'birthPlace': 'Los Angeles, California',
        'species': 'Human',
        'voiceActor': 'Aaron Paul',
        'quote': `Fool me once, fool me twice, fool me chicken soup with rice.`
    },
    'princess carolyn': {
        'name': 'Princess Carolyn',
        'birthDate': 'June 6th, 1974',
        'birthPlace': 'Eden, North Carolina',
        'species': 'Cat',
        'voiceActor': 'Amy Sedaris',
        'quote': `Aww, fish!`
    },
    'mr. peanutbutter': {
        'name': 'Mr. Peanutbutter',
        'birthDate': 'August 20th, 1969',
        'birthPlace': 'Labrador Peninsula, Canada',
        'species': 'Dog',
        'voiceActor': 'Paul F. Tompkins',
        'quote': `The universe is a cruel, uncaring void. The key to being happy isn't a search for meaning. It's to just keep yourself busy with unimportant nonsense, and eventually, you'll be dead.`
    },
    'unknown': {
        'name': 'unknown',
        'birthDate': 'unknown',
        'birthPlace': 'unknown',
        'species': 'unknown',
        'voiceActor': 'unknown',
        'quote': `unknown`
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
