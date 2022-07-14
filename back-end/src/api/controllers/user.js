import express from 'express';

import { getUserAvatar, getUserData, getUserEvents, postProfileImage } from '../services/users.js';
import authorizeToken from '../middlewares/authentication.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.get('/', authorizeToken , async (req, res)=>{  
  const serviceResult = await getUserData(req.user._id);
  res.status(serviceResult.status).json({
    message: serviceResult.message, 
    data: serviceResult.data
  });
});

router.get('/events', authorizeToken , async (req, res)=>{
  const serviceResult = await getUserEvents(req.user_id);
  res.status(serviceResult.status)
  .json({
    message: serviceResult.message, 
    data: serviceResult.data
  });
});

router.get('/events', authorizeToken , async (req, res)=>{
  const serviceResult = await getUserAvatar(req.user_id);
  res.status(serviceResult.status)
  .json({
    message: serviceResult.message, 
    data: serviceResult.data
  });
});

router.post('/img', authorizeToken, upload.single('image'), async (req, res)=> {
  const serviceResult = await postProfileImage(req.user, req.file);
  res.status(serviceResult.status).json(serviceResult.message);
});

export default router;