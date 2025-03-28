const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config()

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

const PORT = process.env.PORT || 8080;

//listen server
app.listen(PORT, ()=>{
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgBlue.underline)
})