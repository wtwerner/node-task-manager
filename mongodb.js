// CRUD

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 33
    // }).then((resp) => {
    //     console.log(resp)
    // }).catch((err) => {
    //     console.log(err)
    // })

    db.collection('tasks').deleteOne({
        description: 'Do laundry'
    }).then((resp) => {
        console.log(resp)
    }).catch((err) => {
        console.log(err)
    })
})

