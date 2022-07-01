# To-do List (API)
### APP
- [x] Express
  - Start Express server
  - Instance server router
  - Start server
- [ ] Set a top-level handler for any unexpected error
### Controllers
- [ ] Routes:
  - [x] /sign-up: User registration with username and password
    - Recive a Json payload with username, password and password confimation
    - Do a validation from recived payload
    - if no errors, call a service to register
    - Recive back an '201' Created code with user Id or an especifc error code with log message
  - [ ] /sign-in: User login with username and password
    - Recive a Json payload with username and password
    - Call a service to validate login inputs
    - If invalid recive an '401' Unauthorized status and message 
    - If valid recive an '202' Acepted and a json with user data
    - Create a JWT to validate user requests while logged in
  - [ ] /user
    - User JWT validation to every request
### Services
- [ ] Authentication:
  - [x] Sign-Up:
    - Search in the database if user already exist
    - if exists send an '409' Conflict code and message
    - if don't, registrate new user in database (password should be crypted in HASH)
    - Successfull registration send a '201' Created code and new user Id back to controller
    - Catch any database error, if it happens, and handle with a message and '500' status code
  - [ ] Sign-in:
    - Search in the database if user already exists
    - If exists verify HASH password validation
    - In case of success search user in database and get data(_id, username, events)
    - Send to controller the data and 

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
- [ ] Create a strings library for logs