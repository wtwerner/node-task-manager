require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('606e3049f5377857ab546a1c').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})