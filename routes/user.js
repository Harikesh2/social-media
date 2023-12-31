const express = require('express');

const router = express.Router();


const userController = require('../controller/user_controller');


router.get('/profile', userController.profile);

router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);
module.exports = router;
