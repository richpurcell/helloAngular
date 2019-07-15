const Task = require('./models');

module.exports = {
    allTasks: (req, res)=>{ // Retrieve all Tasks
        Task.find({})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    get_task: (req, res)=>{ // Retrieve a Task by ID
        console.log('The Task id requested is:', req.params.id);
        Task.findById(req.params.id)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    add_task: (req, res)=>{ // Create a Task
        var task = new Task(req.body);
        console.log('The Task obj requested is:', req.body);
        task.save(req.body)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    update_task: (req, res)=>{ // Update a Task by ID
        console.log('The Task id requested is:', req.params.id);
        Task.findByIdAndUpdate(req.params.id, {$set:req.body})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    delete_task: (req, res)=>{ // Delete a Task by ID
        console.log('The Task id requested is:', req.params.id);
        Task.remove({_id: req.params.id})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
}