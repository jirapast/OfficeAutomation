var express = require('express')
const axios = require('axios')
const cors = require('cors')

var app = express()
app.use(cors())

const client_port = 3000
const server_port = 4000

var corsOptions = {
    origin: 'http://localhost:' + client_port,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/', function (req, res) {
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