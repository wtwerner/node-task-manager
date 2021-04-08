require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('606cd7f1b4562a42a4a77b51', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})