import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Number,
    username: String,
    password: String,
    events: Number,
});

const EventSchema = new Schema({
    id: Number,
    initHour: Date,
    endHour: Date,
    description: String,
});

const User = mongoose.model('User', UserSchema); 
const Event = mongoose.model('Event', EventSchema); 

export { User, Event };