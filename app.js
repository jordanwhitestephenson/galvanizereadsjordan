const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')
const authorFile = require('./routes/authorroute')
const bookFile = require('./routes/bookroute')

app.options('*', cors());

// app.use(cors({origin: '*'}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/author', authorFile)
app.use('/book', bookFile)
// app.use('/author_bookroute', authorbookFile)


app.use(express.static('public'));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})

module.exports = app, authorFile, bookFile, cors
