const express = require("express");
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');



const server = express();

const mongo_db_url = 'mongodb+srv://ahalhassan:koko1994ko@cluster0.ohfvy.mongodb.net/todos_db?retryWrites=true&w=majority'


server.get('/todo',todoController.getAllTodo );

server.post('/todo',todoController.insertTodo);

server.put('/todo',todoController.updateTodo);

server.delete('/todo',todoController.deleteTodo);

server.listen(4000, function(){
    console.log('server has started to run in express');
    mongoose.connect(mongo_db_url)
    .then(function(){
        console.log('DB is connected')
    })
    .catch(function(error){
        console.log('DB is not connected:', error.message);

    });
});

    
