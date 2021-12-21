const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
title: {
     type:String,
     require:true[true, 'T itle']
},
description: String,
deadline: Date,
inCompleted: Boolean
},{timestamp: true});

const todo = mongoose.model('todo', todoSchema);
module.exports = todo;