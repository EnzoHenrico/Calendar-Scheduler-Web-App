import mongoose from 'mongoose';

const { Schema } = mongoose;
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Event',
  }],
});

const EventSchema = new Schema({
  initHour: Date,
  endHour: Date,
  description: String,
  creator: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const User = mongoose.model('User', UserSchema);
const Event = mongoose.model('Event', EventSchema);

export { User, Event };
