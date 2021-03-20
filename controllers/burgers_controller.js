const burger = require('../models/burger')

const express = require('express')
const router = express.Router()

// rander index page
router.get('/', async function(req, res) {
  const data = await burger.all()
  const burgers = { burgers: data }
  res.render('index', burgers)
})

// create new burger
router.post('/api/burgers', async function(req, res) {
  const burgerName = req.body.burger_name
  const data = { name: burgerName }
  await burger.create(data)
  res.redirect('/')
})

// update a burger
router.post('/api/burgers/:id', async function(req, res) {
  const burgerID = req.params.id
  const data = { id: burgerID }
  await burger.update(data)
  res.redirect('/')
})

module.exports = router