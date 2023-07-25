import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';

//component
import router from '../server/route/routes.js';
import connection from '../server/database/db.js';


dotenv.config();
const app = express();

app.use(cors());
app.use('/', router);

const PORT = 8000;

app.listen(PORT,()=> console.log(`server is running on port ${PORT}`));


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);
