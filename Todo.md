# To-do List (API)

### APP

- [x] Express
  - Start Express server
  - Instance server router
  - Start server
- [ ] Set a top-level handler for any unexpected error

### Controllers

- [x] Authentication Routes:

  - [x] /sign-up: User registration with username and password
    - Recive a payload with username, password and password confimation
    - Do a validation from recived payload
    - if no errors, call a service to register
    - Send back an status code and message
  - [x] /sign-in: User login with username and password
    - Recive a payload with username and password
    - Call a service to validate login inputs
    - Create a JWT to validate user requests while logged in
    - Send back an status code and message
  - [x] /user
    - User JWT validation to every request
    - Send back an status code and message

- [ ] Events Routes:
  - [x] /create: User request to add a new event in you calendar
    - Recive a paylaod with initial Date, End Date, Description and User ID
    - Validate recived data
    - Call a service to create a new event (recive: initDate, endDate, description and userId)
    - Send back a status code and message
  - [x] /list: User request to access a list of all events
    - Recive a paylaod User ID
    - Validate Token with Middleware
    - Call a service to get all registered events (recive user ID)
    - Send back a status code and all events information payload
  - [x] /update: User request to update a especif event information
    - Recive a paylaod with Event ID, User ID and what information want to change
    - Validate Token with Middleware
    - Call a service to update info (recive : eventId, userId, { infoName: newInfo })
    - Send back a status code and message
  - [x] /delete: User request to delete a event
    - Recive a paylaod with Event ID and User ID
    - Validate Token with Middleware
    - Call a service to delete event (recive> enventId, userId)
    - Send back a status code and message

### Services

- [x] Authentication:

  - [x] Sign-Up:
    - Search in the database if user already exist
    - if exists send an '409' Conflict code and message
    - if don't, registrate new user in database (password should be crypted in HASH)
    - Successfull registration send a '201' Created code and new user Id back to controller
    - Catch any database error, if it happens, and handle with a message and '500' status code
  - [x] Sign-in:
    - Search in the database if user already exists
    - If exists verify HASH password validation
    - In case of success search user in database and get data(\_id, username, events)
    - Send user data to controller

- [x] Events:

  - [x] Create Event: recive initDate, endDate, description and userId
    - Create event in database
    - Find user and update events to relation event/user
    - Send back to controller '201' Created and success message
  - [x] Read Events: recive user ID
    - Find User and filter only the events
    - Send back to controller '202' and a payload with all events
  - [x] Update Event: recive eventId, userId, { infoName: newInfo }
    - Find event and update infos
    - Send back to controller '202' and success message
  - [x] Delete: recive enventId, userId
    - Find Event and delete
    - Send back to controller '202' and success message

### Database

- Mongoose:
  - [x] Create database connection and log promise
  - [x] Inport in app asyncronous for security
  - [x] Create Schemas for User and the Events:
    - Each User contains:
      - ID (mongoDb generated)
      - Username
      - Password
      - Events Array (include references associated with events)
    - Each Event contains:
      - Start date
      - End date
      - Description
      - A Creator (A reference from who belongs the event)
  - [x] Export modules

### General

- [x] Use ambient variables to sensitive information
- [x] Create a strings library for logs
