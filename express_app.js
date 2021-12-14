const { request } = require("express");
const mongoose = require('mongoose');
const  express  = require("express");



const server = express();
const mongo_db_url = 'mongodb+srv://ahalhassan:mugtar@@dehia??@cluster0.ohfvy.mongodb.net/todos_db?retryWrites=true&w=majority'


server.get('/holy', function(request ,response){
    request.status(200).json('All students has been given');
});

server.post('/student', function(request, response){
    request.status(200).json('All a new student');
});

server.put('/student', function(request, response){
    request.status(200).json('update student');
});
server.delete('/student', function(request, response){
    request.status(200).json('Delete student');
});

server.listen(4000, function(){
    console.log('server has started to run in express');
});

    
