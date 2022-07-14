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

UserSchema.virtual('image', {
  ref: 'Image',
  localField: '_id',
  foreignField: '_user',
});

// Events data schema
const EventSchema = new Schema({
  _author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  eventName: { type: String, required: true },
  initDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: String,
});

// User Image schema
const ImageSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
}); 

const User = mongoose.model('User', UserSchema);
const Event = mongoose.model('Event', EventSchema);
const Image = mongoose.model('Image', ImageSchema);

export { User, Event, Image };
