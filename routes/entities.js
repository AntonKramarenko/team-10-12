const { Router } = require('express')
const router = Router()
const Entity = require('../models/entity')


router.get('/', async (req, res) => {
    try {
        const entity = await Entity.find()
        res.json(entity)
    } catch (error){
        console.log('error', error);
        res.statusMessage = "GET error";
        res.status(400).end();
    }
})

router.get('/:id', async (req, res) => {
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

router.get('/phone/:phoneNumber', async (req, res) => {
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

router.post('/', async (req, res) => {
    try {
        const entity = new Entity({...req.body})
        await entity.save()
        return res.sendStatus(200)
    } catch (error){
        console.log('error', error);
        res.statusMessage = "GET error";
        res.status(400).end();
    }
})

router.put('/:id', async (req, res) => {
    try {
        const entityId = req.params.id;

        const updatedEntity = await Entity.findOneAndUpdate(
          { id: entityId },
          {...req.body},
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

router.delete('/:id', async (req, res) => {
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
