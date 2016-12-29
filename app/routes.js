var Job = require('./models/job');
var Project = require('./models/project');
var Language = require('./models/language');
var Framework = require('./models/framework');
var Email = require('./models/email');
var Nodemailer = require('nodemailer');

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
            logo: req.body.logo,
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

    // update a job
    app.put('/api/jobs/:job_id', function (req, res) {
        Job.findById(req.params.job_id, function (err, job) {
            if (err)
                res.send(err);

            if ( req.body.position != null ) {
                job.position = req.body.position;
            }
            if ( req.body.company != null ) {
                job.company = req.body.company;
            }
            if ( req.body.description != null ) {
                job.description = req.body.description;
            }
            if ( req.body.start != null ) {
                job.start = req.body.start;
            }
            if ( req.body.end != null ) {
                job.end = req.body.end;
            }
            if ( req.body.logo != null ) {
                job.logo = req.body.logo;
            }


            job.save(function(err) {
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
            technologies: req.body.technologies,
            code: req.body.code,
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

    // update a project
    app.put('/api/projects/:project_id', function (req, res) {
        Project.findById(req.params.project_id, function (err, project) {
            if (err)
                res.send(err);
            if ( req.body.name != null ) {
                project.name = req.body.name;
            }
            if ( req.body.description != null ) {
                project.description = req.body.description;
            }
            if ( req.body.time != null ) {
                project.time = req.body.time;
            }
            if ( req.body.photo != null ) {
                project.photo = req.body.photo;
            }
            if ( req.body.technologies != null ) {
                project.technologies = req.body.technologies;
            }
            if ( req.body.code != null ) {
                project.code = req.body.code;
            }

            project.save(function(err) {
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

    // update a languae
    app.put('/api/languages/:language_id', function (req, res) {
        Language.findById(req.params.language_id, function (err, language) {
            if (err)
                res.send(err);
            if (req.body.name != null) {
                language.name = req.body.name;
            }
            if (req.body.strength != null) {
                language.strength = req.body.strength;
            }

            language.save(function(err) {
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

    // add a job
    app.post('/email', function (req, res) {

        var transporter = Nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'johnwudonotreply@gmail.com',
                pass: 'asdlkj123'
            }
        });

        var mailOptions = {
            from: '"' + req.body.name + '" <' + req.body.email + '>',
            replyTo: '"' + req.body.name + '" <' + req.body.email + '>',
            to: 'john.wu@mail.mcgill.ca', // list of receivers
            subject: 'New email sent from john-wu.me', // Subject line
            html: 'You have received a new email form john-wu.me. <br><br> From: ' + req.body.name + '<br><br>'
            + 'Email: ' + req.body.email + '<br><br>'
            + 'Subject: ' + req.body.subject + '<br><br>'
            + req.body.message
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
                res.json({yo: 'error'});
            }else{
                console.log('Message sent: ' + info.response);
                res.json({yo: info.response});
            };
        });

    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });


};