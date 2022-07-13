import express from 'express';

import { getUserData, getUserEvents } from '../services/users.js';
import authorizeToken from '../middlewares/authentication.js';

const router = express.Router();

router.get('/data', authorizeToken , async (req, res)=>{

  console.log(req.user);
  
  const serviceResult = await getUserData(req.user._id);

  res.status(serviceResult.status)
  .json({
    message: serviceResult.message, 
    data: serviceResult.data
  });
});

router.get('/data', authorizeToken , async (req, res)=>{
  const serviceResult = await getUserEvents(req.user_id);
  res.status(serviceResult.status)
  .json({
    message: serviceResult.message, 
    data: serviceResult.data
  });
});

export default router;