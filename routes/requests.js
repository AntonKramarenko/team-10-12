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
    const { userId,message, date, resolved, group, username } = req.body

    const request = new Request({ userId,message, date, resolved, group, username  })
    await request.save()
    return res.sendStatus(200)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})
router.delete('/:id', async (req, res) => {
  try {
    await Request.findOneAndDelete({ id: req.params.id })
    const request = await Request.find()

    res.json(request)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})


module.exports = router
