/**
 * Created by JohnWu on 2016-10-27.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Project', {
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    time: {
        type: String,
        default: ''
    },
    photo: {
        type: String,
        default: ''
    }
});
