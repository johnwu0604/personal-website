/**
 * Created by JohnWu on 2016-10-27.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Language', {
    name: {
        type: String,
        default: ''
    },
    strength: {
        type: String,
        default: ''
    }
});
