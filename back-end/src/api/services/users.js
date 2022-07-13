import { User } from '../models/db_schema.js';
import strings from '../models/strings.js';

async function getUserData(user) {
  try {
    const query = await User.findById(user);
    const { username, id } = query;

    return { status: 200, message: 'Success!', data: { username, id } };
  } catch (error) {
    return {
      status: 500,
      message: `${strings.errors.database.read}: ${error.toString()}`,
    };
  }
}

async function getUserEvents(user) {
  try {
    const { events } = await User.findById(user, 'events').populate('events');
    return { status: 200, message: 'Success!', events };
  } catch (error) {
    return {
      status: 500,
      message: `${strings.errors.database.read}: ${error.toString()}`,
    };
  }
}

export { getUserData, getUserEvents};
