const { Router } = require('express')
const router = Router()
const { ukrainianRegions} = require("../constants");


router.get('/handbook/regions', async (req, res) => {
  try {
    res.json(ukrainianRegions)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})

module.exports = router
