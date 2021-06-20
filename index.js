//index.js
const path = require('path') // to serve public dir, path는 core node module이라 install not required
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

const http = require('http')
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

server.listen(PORT, () => {
    console.log(`server on port ${PORT}!`)
})
