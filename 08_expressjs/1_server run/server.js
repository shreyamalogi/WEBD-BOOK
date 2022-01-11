//jshint esversion:6

const express = require('express') //to import express framework
const app = express()
const port = 3000

app.get('/', (req, res) => { //the browser gets in touch with the server which is at the location 3000 to display you something which is hosted on your local server
    res.send('<h1>Hello Shreya!</h1>') //shows the output from the server to the browser [send method is used to send data]

})

app.listen(port, () => { //to listen on any port [takes 2 parameters port and a callback function]
    console.log(`Example app listening at http://localhost:${port}`)
})