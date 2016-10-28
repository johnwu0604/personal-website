var Job = require('./models/job');
var Project = require('./models/project');

module.exports = function (app) {

    // Jobs api ----------------------------------------------------------------

    // get all jobs
    app.get('/api/jobs', function (req, res) {
        Job.find(function (err, jobs) {
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
    app.delete('/api/jobs/:job_id', function (req, res) {
        Job.remove({
            _id: req.params.job_id
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



    // Project api ----------------------------------------------------------------

    // get all projects
    app.get('/api/projects', function (req, res) {
        Project.find(function (err, projects) {
            if (err) {
                res.send(err);
            }
            res.json(projects);
        });
    });

    // add a project
    app.post('/api/projects', function (req, res) {
        Project.create({
            name: req.body.name,
            description: req.body.description,
            time: req.body.time,
            photo: req.body.photo,
            done: false
        }, function (err) {
            if (err)
                res.send(err);
            Project.find(function (err, projects) {
                if (err) {
                    res.send(err);
                }
                res.json(projects);
            });
        });
    });


    // delete a project
    app.delete('/api/projects/:project_id', function (req, res) {
        Project.remove({
            _id: req.params.project_id
        }, function (err) {
            if (err)
                res.send(err);
            Project.find(function (err, projects) {
                if (err) {
                    res.send(err);
                }
                res.json(projects);
            });
        });
    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

};