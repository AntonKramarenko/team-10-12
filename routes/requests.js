const { Router } = require('express')
const router = Router()
const Request = require('../models/request')
const Entity = require("../models/entity");

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

router.post('/', async (req, res) => {
  try {
    const { userId,message, date, resolved } = req.body

    const entity = new Request({ userId,message, date, resolved })
    await entity.save()
    return res.sendStatus(200)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})

module.exports = router
