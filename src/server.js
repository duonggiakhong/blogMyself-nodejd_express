import express from 'express';
import configViewEngine from "./configs/viewsEngine";
import initWebRouter from "./route/web"
//import pool from './configs/connectDB';


require('dotenv').config();


const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);
initWebRouter(app);





app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})