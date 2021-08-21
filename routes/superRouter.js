// module imports
import express from 'express';
// controller imports
import {superControllers} from '../controllers/super.controller.js';

const sC = new superControllers();
const superRouter = express.Router();

superRouter.get('/', sC.getSuper);

superRouter.get('/:id', sC.getSuperById);

superRouter.post('/', sC.postSuper);

superRouter.put('/:id', sC.updateSuper);

superRouter.delete('/:id', sC.deleteSuper);



export {superRouter};