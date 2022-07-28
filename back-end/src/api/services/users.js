import fs from 'fs';

import { User, Image } from '../models/db_schema.js';
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

async function getUserAvatar(user) {
  try {
    const { img } = await User.findById(user, 'image').populate('image');
    return { status: 200, message: 'Success!', img };
  } catch (error) {
    return {
      status: 500,
      message: `${strings.errors.database.read}: ${error.toString()}`,
    };
  }
}

async function postProfileImage(user, file) {
  try {
    const saveImage = new Image({
      _user: user._id,
      img: {
        data: fs.readFileSync('uploads/' + file.filename),
        contentType: 'image/jpeg',
      }
    });
    await saveImage.save()
    return { status: 200, message: 'Image saved Sucessfully' }    
  } catch (error) {
    return { status: 500, message: `Error on save file in DB: ${error.message}` };
  }
}

export { getUserData, getUserEvents, getUserAvatar, postProfileImage };
