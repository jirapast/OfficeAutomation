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

const sqlite3 = require('sqlite3')
// const _file_path_ = './DB/test1.db'

function checkDB(table_name) {
    let db = new sqlite3.Database('./DB/test1.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) { return console.error(err.message) }
        // console.log('Connected to the in-memory SQlite database.');
    })
    db.run(`PRAGMA table_info(` + table_name + `)`, function(err, res) {
        if (err) { return console.error(err.message) }
        console.log(`PRAGMA table_info `, res)
    })
    db
    return 1
}

function insertDB(table_name, item) {
    let db = new sqlite3.Database('./DB/test1.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) { return console.error(err.message) }
        // console.log('Connected to the in-memory SQlite database.');
    })
    db.run(`INSERT INTO ` + table_name + ` VALUES (` + item + `)`, function(err) {
        if (err) { return console.error(err.message) }
        // console.log(`Rows inserted ${this.changes}`)
    })
    db.close((err) => {
        if (err) { return console.error(err.message) }
        // console.log('Close the database connection.')
    })
    return 1 
}

function deleteDB(table_name, item) {
    let db = new sqlite3.Database('./DB/test1.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) { return console.error(err.message) }
        // console.log('Connected to the in-memory SQlite database.');
    })

    db.run(`DELETE FROM ` + table_name + ` WHERE item==` + item, function(err) {
        if (err) { return console.error(err.message) }
        // console.log(`Rows inserted ${this.changes}`)
    })
    
    db.close((err) => {
        if (err) { return console.error(err.message) }
        // console.log('Close the database connection.')
    })
    
    return 1 
}

var corsOptions = {
    origin: 'http://localhost:' + client_port,
    optionsSuccessStatus: 200
}

app.get('/', function (req, res) {
    res.send('response from server')
})

app.get('/checkdb', function (req, res) {
    table_name = 'table1'
    checkDB(table_name)
    res.send('response from server')
})

app.get('/insertdb', function (req, res) {
    item = req.query.item
    if (typeof(item)=='undefined') {
        res.send('response: item is undefined')
    } else {
        table_name = 'table1'
        console.log(table_name, item)
        insertDB(table_name, item)
        res.send('response: okay')
    }
})

app.get('/deletedb', function (req, res) {
    item = req.query.item
    if (typeof(item)=='undefined') {
        res.send('response: item is undefined')
    } else {
        table_name = 'table1'
        console.log(table_name, item)
        deleteDB(table_name, item)
        res.send('response: ')
    }
})

app.get('/download', cors(corsOptions), function(req, res){
    const file = `${__dirname}/docx_files/meta.docx`
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