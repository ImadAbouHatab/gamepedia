const express = require('express');

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/resetpasswordrequest', resetPasswordRequest);
router.post('/resetpassword', resetPassword);

module.exports = router;