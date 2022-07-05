import mongoose from 'mongoose';

// User data schema
const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  },
);

// Virtual creates a realation between two models
UserSchema.virtual('events', {
  ref: 'Event',
  localField: '_id',
  foreignField: '_author',
});

// Events data schema
const EventSchema = new Schema({
  _author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  eventName: String,
  initDate: Date,
  endDate: Date,
  description: String,
});

const User = mongoose.model('User', UserSchema);
const Event = mongoose.model('Event', EventSchema);

export { User, Event };
