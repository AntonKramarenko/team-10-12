const { Router } = require('express')
const router = Router()
const Groups = require('../models/groups')
const Entity = require("../models/entity");


router.get('/', async (req, res) => {
  try {
    const entity = await Groups.find()
    res.json(entity)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})

router.get('/:id', async (req, res) => {
  const groupId = req.params.id;
  try {
    const entity = await Groups.findById(groupId)
    res.json(entity)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})


router.post('/', async (req, res) => {
  try {
    const group = new Groups({...req.body})
    await group.save()
    return res.sendStatus(200)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})

router.post('/addGroupUser', async (req, res) => {

  const { phoneNumber, groupId } = req.body

  console.log(phoneNumber, groupId )
  try {
    const entity = await Entity.findOne({ phoneNumber })
    const group = await Groups.findById(groupId)

    if(!entity){
      return res.status(404).json({ error: 'Entity not found' });
    }


    const updatedGroup = await Groups.findOneAndUpdate(
      { id: groupId },
      { ...group, users:  [ ...group.users, entity ]  },
      { new: true }
    )

    if (!updatedGroup) {
      return res.status(404).json({ error: 'Entity not found' });
    }

    res.json(updatedGroup);
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})

router.put('/:id', async (req, res) => {
  try {
    const groupId = req.params.id;

    const updatedGroup = await Groups.findOneAndUpdate(
      { id: groupId },
      {...req.body},
      { new: true }
    );

    if (!updatedGroup) {
      return res.status(404).json({ error: 'Group not found' });
    }

    res.json(updatedGroup);
  } catch (error) {
    console.log('error', error);
    res.statusMessage = "An error occurred while updating the group";
    res.status(400).end();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Groups.findOneAndDelete({ id: req.params.id })
    const groups = await Groups.find()

    res.json(groups)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})

module.exports = router
