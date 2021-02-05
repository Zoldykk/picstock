const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const path = require('path')
const mongoose = require('mongoose');
const routes = require('./routes/router')

const app = express()
const port = process.env.PORT || 5000;

// DB Config
const URI = process.env.dbURI
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true },  () => {console.log('Connected to Db')})

//Middlewares
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors({origin: '*'}))
app.use('/images',express.static('uploads'))

app.use('/', routes)

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
