const todo = require("../models/todo");

function insertTodo(request, response){
    const {title, description, deadline, isCompleted} = request.body
    console.log(request.body);
    todo.create({
        title, description, deadline, isCompleted
    })

    .then(function(){
        response.status(200).json('Data has been created')
    })
    .catch(function(error){
        response.status(401).json('not created',error.message);

    });

}
function updateTodo(){

}
function deleteTodo(request,response){
    const{ id } = request.params.id;
    todo.fineByAndDelete(id)
    .then(function(){
        response.status(200).json({success:true, message: 'todo is deleted successfully'});
    })
    .catch(function(){
        response.status(404).json({success:false, message: 'todo cant update. try againno'});
    })

}
function getTodoById(request,response){
    const{ id } = request.params;
    const{isCompleted} = request.body

}
function getAllTodo(request, response){
    todo.find({})
    .then(function(data){
        response.status(200).json({
            success: true, data})
    })
    .catch(function(error){
        response.status(401).json({
            success: false,message: 'not created:' +error.message

        });

    })

}
module.exports={
    insertTodo, updateTodo, deleteTodo, getTodoById, getAllTodo
}

