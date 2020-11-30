const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const newUser = await User.create(req.body);
        //await newUser.save();
        return res.send({ newUser })
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Registration falied' });
    }
});

module.exports = app => app.use('/auth', router);
