/* eslint-disable object-curly-newline */
import { startOfMonth, endOfMonth } from 'date-fns';

import { Event } from '../models/db_schema.js';
import strings from '../models/strings.js';

const errorMessages = strings.errors;
const succesMessages = strings.success;

async function createEvent(payload) {
  try {
    // Insert Event in database
    await Event.create(payload);
    return { status: 201, message: succesMessages.databse.create };
  } catch (error) {
    return {
      status: 500,
      message: `${errorMessages.database.create}: ${error.toString()}`,
    };
  }
}

async function getEventbyMonth(date, author) {
  try {
    // Filter by month
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    const events = await Event.find({
      initDate: { $gte: start, $lt: end },
      _author: author,
    });

    // Creates an array with 1 item for each day with their events
    const numDays = end.getDate();
    const days = Array.from({ length: numDays }, (v, i) => ({
      day: i + 1,
      events: events.filter((e) => e.initDate.getDate() === i + 1),
    }));

    return { status: 200, message: succesMessages.databse.read, days };
  } catch (error) {
    return {
      status: 500,
      message: `${errorMessages.database.read}: ${error.toString()}`,
    };
  }
}

async function updateEvent(eventId, changes) {
  try {
    await Event.findByIdAndUpdate(eventId, changes);
    return { status: 200, message: succesMessages.databse.update };
  } catch (error) {
    return {
      status: 500,
      message: `${errorMessages.database.unknown}: ${error.toString()}`,
    };
  }
}

async function deleteEvent(eventId) {
  try {
    await Event.findByIdAndDelete(eventId);
    return { status: 200, message: succesMessages.databse.delete };
  } catch (error) {
    return {
      status: 500,
      message: `${errorMessages.database.unknown}: ${error.toString()}`,
    };
  }
}

export { createEvent, updateEvent, getEventbyMonth, deleteEvent };
