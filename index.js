require('dotenv').config();
const { Server } = require('socket.io')
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + "/index.html");
})

io.on('connection', (socket) => {
	socket.on("chat message", (msg) => {
		console.log("message: " + msg);
	})
})

const {PORT} = process.env;
server.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`)
})