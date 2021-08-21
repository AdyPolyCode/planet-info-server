// module imports
import express from 'express';
// controller imports
import {gasControllers} from '../controllers/gas.controller.js';

const gC = new gasControllers();
const gasRouter = express.Router();

gasRouter.get('/', gC.getGas);

gasRouter.get('/:id', gC.getGasById);

gasRouter.post('/', gC.postGas);

gasRouter.put('/:id', gC.updateGas);

gasRouter.delete('/:id', gC.deleteGas);


export {gasRouter};