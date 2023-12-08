const { Router } = require('express')
const router = Router()
const Request = require('../models/request')

router.get('/', async (req, res) => {
  try {
    const request = await Request.find()
    res.json(request)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})

module.exports = router
