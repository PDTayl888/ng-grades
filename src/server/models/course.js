
const mongoose = require('mongoose');

const Course = mongoose.model('Courses', new mongoose.Schema({
    title: {
        type: String,
        minLength: 5,
        maxLength: 25,
        required: true
    },
    students: {
        type: String,
        minLength: 1,
        maxLength: 25
    }
}));

exports.Course = Course;
