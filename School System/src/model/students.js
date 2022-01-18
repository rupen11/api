const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3
    },
    email: {
        type: String,
        require: true,
        unique: [true, 'Email id already exist'],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: String,
        require: true,
        unique: true,
        minlength: 10
    },
    address: {
        type: String,
        require: true
    }
});

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;