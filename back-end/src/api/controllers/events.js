import express from 'express';

import {
  createEvent,
  deleteEvent,
  updateEvent,
  getEventbyMonth,
} from '../services/events.js';
// import getUserEvents from '../services/users.js';
import authorizeToken from '../middlewares/authentication.js';
import isDateValid from '../middlewares/dates.js';

const router = express.Router();

// Add new event in calendar
router.post('/', authorizeToken, isDateValid, async (req, res) => {
  console.log(req.body)
  const payload = { _author: req.user._id, ...req.body };
  const serviceResult = await createEvent(payload);
  res.status(serviceResult.status).json({ message: serviceResult.message });
});

// List all events related to courent user
router.get('/:time', authorizeToken, async (req, res) => {
  if (req.params.time <= 0) {
    res.status(500).json({ message: 'Invalid Date' });
  }
  const date = new Date(parseInt(req.params.time, 10));
  const user = req.user._id;
  const serviceResult = await getEventbyMonth(date, user);
  res.status(serviceResult.status).json(serviceResult.days);
});

// Update parametters from especifc event
router.patch('/:id', authorizeToken, async (req, res) => {
  const serviceResult = await updateEvent(req.params.id, req.body);
  res.status(serviceResult.status).json(serviceResult.message);
});

// Delete a especif event
router.delete('/:id', authorizeToken, async (req, res) => {
  const serviceResult = await deleteEvent(req.params.id);  
  res.status(serviceResult.status).json({ message: serviceResult.message });
});

export default router;
