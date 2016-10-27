var Todo = require('./models/todo');
var Job = require('./models/job');

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        Todo.find(function (err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err) {
                res.send(err);
            }

            res.json(todos); // return all todos in JSON format
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function (err, todos) {

                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err) {
                    res.send(err);
                }

                res.json(todos); // return all todos in JSON format
            });
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            Todo.find(function (err, todos) {

                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err) {
                    res.send(err);
                }

                res.json(todos); // return all todos in JSON format
            });
        });
    });

    // Jobs api ----------------------------------------------------------------

    // get all jobs
    app.get('/api/jobs', function (req, res) {
        Job.find(function (err) {
            if (err) {
                res.send(err);
            }
            res.json(jobs);
        });
    });

    // add a job
    app.post('/api/jobs', function (req, res) {
        Job.create({
            position: req.body.position,
            company: req.body.company,
            description: req.body.description,
            start: req.body.start,
            end: req.body.end,
            done: false
        }, function (err) {
            if (err)
                res.send(err);
            Job.find(function (err, jobs) {
                if (err) {
                    res.send(err);
                }
                res.json(jobs);
            });
        });
    });


    // delete a job
    app.delete('/api/jobs/:todo_id', function (req, res) {
        Job.remove({
            _id: req.params.job_id
        }, function (err) {
            if (err)
                res.send(err);
            Job.find(function (err, jobs) {
                if (err) {
                    res.send(err);
                }
                res.json(jobs); // return all todos in JSON format
            });
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

};