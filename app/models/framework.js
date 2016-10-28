/**
 * Created by JohnWu on 2016-10-27.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Framework', {
    name: {
        type: String,
        default: ''
    },
    photo: {
        type: String,
        default: ''
    }
});