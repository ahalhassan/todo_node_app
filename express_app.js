require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const todoController = require('./controllers/todoController');
const port = process.env.port || 4000;

const server = express();

// const mongo_db_url = ''
// const mongo_db_url = '';

server.use(express.json());
server.get('/', function(request, response){
    response.status(200).json({success: true, message: 'WELCOME, this is Ahalhassan todo node API'});
})

server.get('/todo',todoController.getAllTodo );

server.post('/todo',todoController.insertTodo);

server.put('/todo',todoController.updateTodo);

server.delete('/todo',todoController.deleteTodo);

server.listen(4000, function(){
    console.log("server has started to run in express");
    mongoose.connect(process.env.ATLAS_URL)
    .then(function(){
        console.log("DB is connected")

    })
    .catch(function(error){
        console.log('DB is not connected:', error.message);

    });
});

    
