const router = require('express').Router();

router.use('/', require('./blogRoute.js'));
module.exports = router;