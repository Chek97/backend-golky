//IMPORTS
const { Router } = require('express');
const { getText } = require('../controllers/iecho');
const router = Router();

//Api route
router.get('/iecho', getText);

//Exports
module.exports = router;