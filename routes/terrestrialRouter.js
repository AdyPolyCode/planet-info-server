// module imports
import express from 'express';
// controller imports
import {terrestrialControllers} from '../controllers/terrestrial.controller.js';

const tC = new terrestrialControllers();
const terrestrialRouter = express.Router();

terrestrialRouter.get('/', tC.getTerrestrial);

terrestrialRouter.get('/:id', tC.getTerrestrialById);

terrestrialRouter.post('/', tC.postTerrestrial);

terrestrialRouter.put('/:id', tC.updateTerrestrial);

terrestrialRouter.delete('/:id', tC.deleteTerrestrial);



export {terrestrialRouter};