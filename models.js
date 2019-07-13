const mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "puppy_mongoose" is the name ofcopy
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/task_man');

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title is required"]},
    description: {type: String, default: "something"},
    completed: {type: Boolean, default: false},
    created_at: {type: Date, default: Date()},
    updated_at: {type: Date, default: Date()},
})
mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');


module.exports = Task;
