const express = require('express')
// Define app
const app = express()
// Define path
const path = require('path')

// Define a public path
const publicPath = path.join(__dirname,'public')


// Define a port and public path as atribute
app.set('port',3000)
app.set('public',path.join(__dirname,'public'))

// Define a middleware
app.use(express.static(path.join(__dirname,'public')))

// Define a simple route
app.get('/test', (req,res)=>{
    res.sendFile(`${publicPath}/index2.html`)
})

// Build a port to listen
app.listen(app.get('port'),()=>{
    console.log(`Hello from port ${app.get('port')}`)
})

