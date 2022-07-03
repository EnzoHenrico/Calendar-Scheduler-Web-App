import { User } from '../models/db_schema.js';
import strings from '../models/strings.js';

async function getUserEvents(user) {
  try {
    const { events } = await User.findById(user, 'events').populate('events');
    return { status: 200, events };
  } catch (error) {
    return {
      status: 500,
      message: `${strings.errors.database.read}: ${error.toString()}`,
    };
  }
}

export default getUserEvents;
