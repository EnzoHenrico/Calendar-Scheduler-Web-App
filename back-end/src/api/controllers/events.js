import express from 'express';

import { createEvent, deleteEvent, updateEvent } from '../services/events.js';
import getUserEvents from '../services/users.js';
import authorizeToken from '../middlewares/authentication.js';

const router = express.Router();

// Add new event in calendar
router.post('/', authorizeToken, async (req, res) => {
  const payload = { _author: req.user._id, ...req.body };
  const serviceResult = await createEvent(payload);
  res.status(serviceResult.status).json({ message: serviceResult.message });
});

// List all events related to courent user
router.get('/', authorizeToken, async (req, res) => {
  const serviceResult = await getUserEvents(req.user._id);
  res.status(serviceResult.status).json(serviceResult.events);
});

// Update parametters from especifc event
router.patch('/:id', authorizeToken, async (req, res) => {
  const serviceResult = await updateEvent(req.params.id, req.body);
  res.status(serviceResult.status).json(serviceResult.message);
});

// Delete a especif event
router.delete('/:id', authorizeToken, async (req, res) => {
  const serviceResult = await deleteEvent(req.params.id);
  res.status(serviceResult.status).json(serviceResult.message);
});

export default router;
