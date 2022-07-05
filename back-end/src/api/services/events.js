/* eslint-disable object-curly-newline */
import { Event } from '../models/db_schema.js';
import strings from '../models/strings.js';

const errorMessages = strings.errors;
const succesMessages = strings.success;

async function createEvent(payload) {
  const { _author, eventName, initHour, endHour, description } = payload;

  const initDate = new Date(initHour);
  const endDate = new Date(endHour);

  try {
    // Insert Event in database
    await Event.create({ _author, eventName, initDate, endDate, description });
    return { status: 201, message: succesMessages.databse.create };
  } catch (error) {
    return {
      status: 500,
      message: `${errorMessages.database.create}: ${error.toString()}`,
    };
  }
}

async function getEventbyId(eventId) {
  try {
    const { events } = await Event.findOne(eventId);
    return { status: 200, message: succesMessages.databse.read, events };
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

export { createEvent, updateEvent, getEventbyId, deleteEvent };
