const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password must not comtain "password"')
            }
        }
    }
})

// const me = new User({
//     name: '   Tommy  ',
//     email: 'MYEMAIL@test.com  ',
//     password: "phone098!" 
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((err) => {
//     console.log('Error!', err)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

// const newTask = new Task({
//     description: 'Order groceries',
//     completed: false
// })

// newTask.save().then((newTask) => {
//     console.log(newTask)
// }).catch((err) => {
//     console.log(err)
// })