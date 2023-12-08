const { Router } = require('express')
const router = Router()
const Entity = require('../models/entity')


router.get('/entities', async (req, res) => {
    try {
        const entity = await Entity.find()
        res.json(entity)
    } catch (error){
        console.log('error', error);
        res.statusMessage = "GET error";
        res.status(400).end();
    }
})

router.get('/entities/:id', async (req, res) => {
    const entityId = req.params.id;
    try {
        const entity = await Entity.findById(entityId)
        res.json(entity)
    } catch (error){
        console.log('error', error);
        res.statusMessage = "GET error";
        res.status(400).end();
    }
})

router.get('/entities/phone/:phoneNumber', async (req, res) => {
    const phoneNumber = req.params.phoneNumber;
    try {
        const entity = await Entity.findOne({ phoneNumber })
        res.json(entity)
    } catch (error){
        console.log('error', error);
        res.statusMessage = "GET error";
        res.status(400).end();
    }
})

router.post('/entities', async (req, res) => {
    try {
        const { username,phoneNumber, email, registrationDate, age, location, userType, familyMembers } = req.body

        const entity = new Entity({
            username,
            phoneNumber,
            email,
            registrationDate,
            age,
            location,
            userType,
            familyMembers
        })
        await entity.save()
        return res.sendStatus(200)
    } catch (error){
        console.log('error', error);
        res.statusMessage = "GET error";
        res.status(400).end();
    }
})

router.put('/entities/:id', async (req, res) => {
    try {
        const entityId = req.params.id;
        const { username,phoneNumber, email, registrationDate, age, location, userType } = req.body

        const updatedEntity = await Entity.findOneAndUpdate(
          { id: entityId },
          { username,phoneNumber, email, registrationDate, age, location, userType },
          { new: true }
        );

        if (!updatedEntity) {
            return res.status(404).json({ error: 'Entity not found' });
        }

        res.json(updatedEntity);
    } catch (error) {
        console.log('error', error);
        res.statusMessage = "An error occurred while updating the entity";
        res.status(400).end();

    }
});

router.delete('/entities/:id', async (req, res) => {
    try {
        await Entity.findOneAndDelete({ id: req.params.id })
        const entities = await Entity.find()

        res.json(entities)
    } catch (error){
        console.log('error', error);
        res.statusMessage = "GET error";
        res.status(400).end();
    }
})

module.exports = router
