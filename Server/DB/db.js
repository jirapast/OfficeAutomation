const sqlite3 = require('sqlite3').verbose()

// const file_path = ':memory:'
const _file_path_ = './test1.db'


// open database in memory
let db = new sqlite3.Database(_file_path_, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
})

console.log(321321312)

//quering data from the table in db
db.serialize(() => {
  db.each(`SELECT * FROM table1`, (err, row) => {
      if (err) { console.err(err.message) }
      console.log('555',  row)
      // console.log('333-->', row.ID + "\t" + row.ITEM)
  })
})

console.log(32132333331312)



// output the INSERT statement
// console.log(sql);

// let sql = `INSERT INTO table1 VALUES (7, 'item')`



        
db.run(`INSERT INTO table1 VALUES ('333333')`, function(err) {
  if (err) { return console.error(err.message) }
  console.log(`Rows inserted ${this.changes}`)
})
// db.run(`INSERT INTO table1 VALUES (NULL, '` + '2222' + `')`, function(err) {
//   if (err) { return console.error(err.message) }
//   console.log(`Rows inserted ${this.changes}`)
// })
    


console.log('1321222222222222222222222222222')

//quering data from the table in db
// db.serialize(() => {
//     db.each(`SELECT * FROM table1`, (err, row) => {
//         if (err) {
//             console.err(err.message)
//         }
//         console.log('-->', row.ID + "\t" + row.ITEM)
//     })
// })

//quering data from the table in db
db.serialize(() => {
  db.each(`SELECT * FROM table1`, (err, row) => {
      if (err) { console.err(err.message) }
      console.log('555',  row)
      // console.log('333-->', row.ID + "\t" + row.ITEM)
  })
})

console.log('1321222222222222222222222222222')

// db.run(`DELETE FROM table1 WHERE ID = 1`, function(err) {
//   if (err) {
//     return console.error(err.message)
//   }
//   console.log(`Rows inserted ${this.changes}`)
// })

// db.run(`DELETE FROM table1 WHERE ID = 7`, function(err) {
//   if (err) {
//     return console.error(err.message)
//   }
//   console.log(`Rows inserted ${this.changes}`)
// })

//quering data from the table in db
// db.serialize(() => {
//     db.each(`SELECT * FROM table1`, (err, row) => {
//         if (err) {
//             console.err(err.message)
//         }
//         console.log('-->', row.ID + "\t" + row.ITEM)
//     })
// })



// console.log('1321222222222222222222222222222')

// db.run(`EXISTS (WHERE ID = 6)`, function(err) {
//     if (err) {
//       return console.error(err.message)
//     }
//     console.log(`Rows inserted ${this.changes}`)
//   })


//quering data from the table in db
// db.serialize(() => {
//     db.each(`SELECT * FROM table1`, (err, row) => {
//         if (err) { console.err(err.message) }
//         console.log('555',  row)
//         // console.log('333-->', row.ID + "\t" + row.ITEM)
//     })
// })

// app.get('/', function (req, res) {
    
    // res.send('response from server')
// })

// db.get( 'SELECT * FROM table1 WHERE ID = 7', ( err, row ) => {
// 	if (err) { console.err(err.message) }
//     console.log(11, typeof(row)=='undefined')
// } )

// func_1

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.')
})