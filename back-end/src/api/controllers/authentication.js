import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/sign-in', (req, res) => {

});

router.post('/sign-up', (req, res) => {

});

// router test
router.get('/test', function (req, res, next) {
    console.log("middleware: ", req.headers);
    next();
}, (req, res) => {
    res.send("Authentication route ok!");
});

router.post('/test-post', (req, res) => {
    const payload = { username: req.body.username };

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);

    res.json({ accessToken });
});

export default router;