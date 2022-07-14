import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    let date = new Date().toISOString();
    callback(null, date + file.originalname);
  }
});

const upload = multer({ storage: storage });

export default upload;