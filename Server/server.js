const bodyParser = require('body-parser');
const express = require('express')
const axios = require('axios')
const cors = require('cors')


var app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const client_port = 3000
const server_port = 4000

var corsOptions = {
    origin: 'http://localhost:' + client_port,
    optionsSuccessStatus: 200
}

app.get('/', function (req, res) {
    console.log(req.query)
    res.send('response from server')
})

app.get('/download', cors(corsOptions), function(req, res){
    const file = `${__dirname}/docx_files/simple.docx`
    res.download(file)
});

app.listen(server_port, function () {
    console.log("Listening at port ", server_port)
})

// var server = app.listen(server_port, function () {
//     var host = server.address().address
//     var port = server.address().server_port
//     console.log("Example app listening at http://%s:%s", host, port)
// })