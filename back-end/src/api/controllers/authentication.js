import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import {} from '../models/db_schema.js'

dotenv.config();

const router = express.Router();

// Recive login payload from user
router.post('/sign-in', (req, res) => {

    // Call login services to validate

    const { username, password } = req.body;

    res.status(200).json({ username, password });
});

// Recive register payload from user
router.post('/sign-up', (req, res) => {
 
    // Call register services to validate

    const { username, password, passwordConfrimation } = req.body;

    res.status(200).json({ username, password, passwordConfrimation });
});

router.get('/auth', authorizeToken, (req, res)=>{

    let body;
    if(body){
        res.status(403).send("Invalid Token");
    }
    res.status(200).json({"token": "token"});
});

router.post('/login', (req, res) => {

    // Login Athorization
    let auth; 

    // if logged in, create token:
    if(auth){
        const user = { username: req.body.username, id } ;
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, (error, token)=>{
            if(error) return res.status(500).json({ message: "Error on create JWT" });            
            res.set('token', token);
        });
    } else {
        res.status(401).json({ message: "Invalid Credentials"});
    }

    res.status(200).json({ accessToken });    
});

// Token Authorization Middleware
function authorizeToken (req, res, next) {
    
    console.log("middleware: ", req.headers);        
    
    next();
}

// Router tests
router.get('/auth', (req, res) => {
    res.status(200).send("Authentication route ok!");
});

router.post('/test-post', (req, res) => {
    res.status(200).send("Recived Data:<br>"+JSON.stringify(req.body));
});

export default router;