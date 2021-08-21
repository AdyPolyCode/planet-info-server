// module imports && routers
import express from 'express';
import {gasRouter} from './gasRouter.js';
import {superRouter} from './superRouter.js';
import {terrestrialRouter} from './terrestrialRouter.js';
// controller imports
import {getPlanets} from '../controllers/planets.controller.js';


const planetRouter = express.Router();

planetRouter.use('/gasGiants', gasRouter);
planetRouter.use('/superEarth', superRouter);
planetRouter.use('/terrestrialPlanets', terrestrialRouter);

planetRouter.get('/', getPlanets);

export {planetRouter};