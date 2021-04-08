require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('606e3049f5377857ab546a1c').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('606e3049f5377857ab546a1c').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})