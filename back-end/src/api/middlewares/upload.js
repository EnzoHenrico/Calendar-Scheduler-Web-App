import { GridFsStorage } from 'multer-gridfs-storage';

import connection from '../../database.js';

const storage = new GridFsStorage({ url: connection});

async function uploadFile() {
 // Create an upload image middleware here 
};

export default uploadFile;
