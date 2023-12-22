// Call The Connection File
require("./config/connection");
const express = require("express");
const app = express();
const server = require('http').createServer(app)
const bodyParser = require('body-parser');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



// calling middlewares : 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send("Welcome Mindful Guru Team")
})

// Call Routes : 
const ObjectId = require("mongodb").ObjectId;
const authRoute = require('./routers/Auth')
const crudRoute = require('./routers/Crud')
const dataRoute = require('./routers/Data')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/auth', authRoute)
app.use('/crud', crudRoute)
app.use('/data', dataRoute)

app.use(cors())



// port listening
server.listen(5000, function () {
  console.log("listen");
})