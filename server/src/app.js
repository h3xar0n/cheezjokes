const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const https = require('https')

const options = {
  host: 'https://icanhazdadjoke.com/',
  method: 'GET',
  headers: 'Accept: application/json'
};

https.get(options, function(res) {
  console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

app.get('/posts', (req, res) => {
    res.send(
      [{
        title: "Random Joke!",
        description: "Why did the chicken cross the road?"
      }]
    )
  })
  

app.listen(process.env.PORT || 8081)