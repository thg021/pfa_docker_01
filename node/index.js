const express = require('express')
const mysql = require('mysql')
const path = require('path');
const PORT = 3000
const app = express()
const config = {
  host: 'pfa-db',
  user: 'root',
  password: 'root',
  database: 'pfa'
}

const connection =  mysql.createConnection(config)


app.set('view engine', 'ejs') 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  const sql = 'select * from modules'

  connection.query(sql, (err, rows) => {
    const modules = JSON.parse(JSON.stringify(rows))
    let elem = ''
    for(let i = 0; i <= modules.length -1; i++){
      elem += `<li>${modules[i].title}</li>`
    }
    response.render('pages/list', {
        modules
    })
  })


  connection.end
})

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`)
})