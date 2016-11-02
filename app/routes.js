var Job = require('./models/job');
var Project = require('./models/project');
var Language = require('./models/language');
var Framework = require('./models/framework');

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

    // Language api ----------------------------------------------------------------

    // get all languages
    app.get('/api/languages', function (req, res) {
        Language.find(function (err, languages) {
            if (err) {
                res.send(err);
            }
            res.json(languages);
        });
    });

    // add a language
    app.post('/api/languages', function (req, res) {
        Language.create({
            name: req.body.name,
            strength: req.body.strength,
            done: false
        }, function (err) {
            if (err)
                res.send(err);
            Language.find(function (err, languages) {
                if (err) {
                    res.send(err);
                }
                res.json(languages);
            });
        });
    });


    // delete a language
    app.delete('/api/languages/:language_id', function (req, res) {
        Language.remove({
            _id: req.params.language_id
        }, function (err) {
            if (err)
                res.send(err);
            Language.find(function (err, languages) {
                if (err) {
                    res.send(err);
                }
                res.json(languages);
            });
        });
    });


    // Framework api ----------------------------------------------------------------

    // get all frameworks
    app.get('/api/frameworks', function (req, res) {
        Framework.find(function (err, frameworks) {
            if (err) {
                res.send(err);
            }
            res.json(frameworks);
        });
    });

    // add a framework
    app.post('/api/frameworks', function (req, res) {
        Framework.create({
            name: req.body.name,
            photo: req.body.photo,
            done: false
        }, function (err) {
            if (err)
                res.send(err);
            Framework.find(function (err, frameworks) {
                if (err) {
                    res.send(err);
                }
                res.json(frameworks);
            });
        });
    });


    // delete a framework
    app.delete('/api/frameworks/:framework_id', function (req, res) {
        Framework.remove({
            _id: req.params.framework_id
        }, function (err) {
            if (err)
                res.send(err);
            Framework.find(function (err, frameworks) {
                if (err) {
                    res.send(err);
                }
                res.json(frameworks);
            });
        });
    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    // // bootstrap ----------------------------------------------------------------
    // app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));

};