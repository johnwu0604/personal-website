/**
 * Created by JohnWu on 2016-10-26.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    }
});