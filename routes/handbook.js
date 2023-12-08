const { Router } = require('express')
const router = Router()
const { regions} = require("../constants");


router.get('/regions', async (req, res) => {
  try {
    res.json(regions)
  } catch (error){
    console.log('error', error);
    res.statusMessage = "GET error";
    res.status(400).end();
  }
})

module.exports = router
