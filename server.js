/* main application starting point */
// common imports from various modules
import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import url from 'url';
import {gateRouter} from './routes/gateRouter.js';
import {errorHandler} from './middlewares/errorHandler.js';

// loading env vars
dotenv.config({ path: './config.env' });


// getting file/dir path names
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// initializing application
const application = express();


// port to access the server
const PORT = process.env.PORT || 3000;


// only dev log
if(process.env.NODE_ENV === 'dev'){
    application.use(logger('dev'));
};


// applying middlewares
application.use(express.json());


// mounting up routes
application.use('/', gateRouter);


// error handling middlewares
application.use(errorHandler);


// 404 handler
application.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `This ${req.originalUrl} page was not found on this server.`
    })
})


// server listening
application.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});