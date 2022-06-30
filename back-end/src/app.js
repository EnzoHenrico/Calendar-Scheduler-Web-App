import express from 'express';
import dotenv from 'dotenv';

import authentication from './api/controllers/authentication.js';

dotenv.config();

const PORT = process.env.PORT;

const app = express();
const router = express.Router();

app.use(express.json());
app.use('/api/v1', router);

router.use('/authentication', authentication);

app.listen(PORT, () => console.log(`server listen on localhost:${PORT}`));

//  Server Test
router.get('/', (req, res) => {
    res.send("Server Ok!");
});

