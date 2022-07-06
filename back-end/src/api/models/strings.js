export default {
  errors: {
    database: {
      create: 'Database: Create failed',
      read: 'Database: Search failed',
      update: 'Database: Update failed',
      delete: 'Database: Delete failed',
    },
    auth: {
      input: 'Username or password does not meet requirements',
      matchKey: "Password don't match",
      token: 'Token creation error',
      foundToken: 'Can not found a Token',
      username: 'Username in use',
      credentials: 'Invalid Credentials',
      login: 'Error on login',
    },
    events: {
      missingEvent: 'Event has to countain start and end',
      hourConflic: "Event end can't be after the start",
      enventOnPast: "Events can't be on the past",
    },
  },
  success: {
    databse: {
      create: 'Database: Created succesfully',
      read: 'Database: Search completed',
      update: 'Database: Updated succesfully',
      delete: 'Database: Deleted succesfully',
    },
    auth: {
      created: 'User created succesfully',
      logged: 'User Logged in succesfully',
    },
    events: {},
  },
};
