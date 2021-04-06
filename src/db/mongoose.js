const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const me = new User({

})

me.save().then((me) => {
    console.log(me)
}).catch((err) => {
    console.log('Error!', err)
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean
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