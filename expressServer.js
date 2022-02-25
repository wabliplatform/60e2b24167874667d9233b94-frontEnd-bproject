const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/home', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/home/:id', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/create', (req, res) => res.sendFile(path.join(__dirname,'html','create.html')));
			this.app.get('/create/:id', (req, res) => res.sendFile(path.join(__dirname,'html','create.html')));
			this.app.get('/view', (req, res) => res.sendFile(path.join(__dirname,'html','view.html')));
			this.app.get('/view/:id', (req, res) => res.sendFile(path.join(__dirname,'html','view.html')));
			this.app.get('/update', (req, res) => res.sendFile(path.join(__dirname,'html','update.html')));
			this.app.get('/update/:id', (req, res) => res.sendFile(path.join(__dirname,'html','update.html')));
			this.app.get('/home2', (req, res) => res.sendFile(path.join(__dirname,'html','home2.html')));
			this.app.get('/home2/:id', (req, res) => res.sendFile(path.join(__dirname,'html','home2.html')));
			this.app.get('/tasks', (req, res) => res.sendFile(path.join(__dirname,'html','tasks.html')));
			this.app.get('/tasks/:id', (req, res) => res.sendFile(path.join(__dirname,'html','tasks.html')));
			this.app.get('/cretetask', (req, res) => res.sendFile(path.join(__dirname,'html','cretetask.html')));
			this.app.get('/cretetask/:id', (req, res) => res.sendFile(path.join(__dirname,'html','cretetask.html')));
			this.app.get('/viewtask', (req, res) => res.sendFile(path.join(__dirname,'html','viewtask.html')));
			this.app.get('/viewtask/:id', (req, res) => res.sendFile(path.join(__dirname,'html','viewtask.html')));
			this.app.get('/start', (req, res) => res.sendFile(path.join(__dirname,'html','start.html')));
			this.app.get('/start/:id', (req, res) => res.sendFile(path.join(__dirname,'html','start.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;