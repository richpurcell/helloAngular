// since the logic is in the controller.js file we must require './controller'
// This is analogous to an import statement in python
const controller = require('./controller');

// This is analagous to the urls.py file in Django
module.exports = function(app) {
    app.get('/tasks', controller.allTasks); // Retrieve all Tasks
    app.get('/tasks/:id', controller.get_task); // Retrieve a Task by ID
    app.post('/tasks', controller.add_task); // Create a Task
    app.put('/tasks/:id', controller.update_task); // Update a Task by ID
    app.delete('/tasks/:id', controller.delete_task); // Delete a Task by ID
}