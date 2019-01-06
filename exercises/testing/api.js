const express = require('express')
const morgan = require('morgan')
const { urlencoded, json } = require('body-parser')
const users = require('./users')
const app = express()

app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use(json())

app.get('/user/:id', async (req, res) => {
  debugger;
  const id = parseInt(req.params.id);
  console.log('id in parameter: ', id)
  // should ge user by given id in route param
  let user;
  try {
    user = await users.findUser(id)
  }
  catch (error) {
    console.log('That did not go well in searching for id.')
    console.error(error)
    process.exit(1)
  }
  res.status(200).send(user)
})

app.delete('/user/:id', async (req, res) => {
  debugger;
  const id = req.params.id
  try {
    await users.deleteUser(id) 
  }
  catch (error) {
    console.log('That did not go well in deleting the id.')
    console.error(error)
    process.exit(1)
}
  res.status(201).send({id})
})

module.exports = app
