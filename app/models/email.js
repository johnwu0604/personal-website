/**
 * Created by JohnWu on 2016-11-26.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Email', {
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    subject: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    }
});
