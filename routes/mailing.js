const { Router } = require('express')
const router = Router()
const Mailing = require('../models/mailing')
const Entity = require("../models/entity");


router.get('/', async (req, res) => {
  try {
    const entity = await Mailing.find()
    res.json(entity)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})

router.post('/', async (req, res) => {
  try {
    const entity = new Mailing({...req.body})
    await entity.save()
    return res.sendStatus(200)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await Mailing.findOneAndDelete({ id: req.params.id })
    const entities = await Mailing.find()

    res.json(entities)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})

module.exports = router
