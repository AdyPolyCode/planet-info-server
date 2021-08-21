// module imports && routers
import express from 'express';
import {planetRouter} from './planetRouter.js';
// controller imports
import {getGate} from '../controllers/gate.controller.js';


const gateRouter = express.Router();

gateRouter.use('/planets', planetRouter);

gateRouter.get('/', getGate);



export {gateRouter};