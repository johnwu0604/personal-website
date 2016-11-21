/**
 * Created by JohnWu on 2016-10-26.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Job', {
    position: {
        type: String,
        default: ''
    },
    company: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    start: {
        type: String,
        default: ''
    },
    end: {
        type: String,
        default: ''
    },
    logo: {
        type: String,
        default: ''
    }
});