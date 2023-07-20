const router = require('express').Router();

router.use('/', require('./BlogRoute.js'));
module.exports = router;