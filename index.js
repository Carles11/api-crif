const express = require("express")
const axios = require("axios")
// const bodyParser = require("body-parser")

const PORT = process.env.PORT || 5000
const app = express()

// DEPRECATED. Allready included in express 4.16 and above
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

app.use(express.urlencoded())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to CRIF api!")
})

app.get("/users", (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        res.json(response.data)
    }).catch(function(error){
        res.json("Error occurred!")
    })
})

app.post("/getUserById", (req, res) => {
    if (!req.body.id) {
        res.json("No ID found in request.")
    }else {
        axios.get(`https://jsonplaceholder.typicode.com/users/${req.body.id}`)
        .then(function(response){
            res.json(response.data)
        }).catch(function(error){
            res.json("Error occurred!")
        })
    }
})

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`)
})
