const { Router } = require('express');
const tryCatchWrapper = require('../helpers/tryCatchWrapper');
const { googleAuth, googleRedirect } = require('./authController');

const router = Router();

router.get('/google', tryCatchWrapper(googleAuth));

router.get('/google-redirect', tryCatchWrapper(googleRedirect));

module.exports = router;
