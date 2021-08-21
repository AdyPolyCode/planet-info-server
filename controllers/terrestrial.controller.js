// import various helpers
import {DatabaseHelpers} from '../utils/dbHelpers.js';
import {readFileSync} from 'fs';
import {ErrorHandler} from '../utils/error.js';

// importing JSON && instantiating helper class for DB
const terrestrialDB = JSON.parse(readFileSync('./db/terrestrialDB.json', 'utf-8'));
const dbHelpers = new DatabaseHelpers(terrestrialDB, 'terrestrialPlanets');

// controller for "/planets/terrestrialPlanets" URL
export class terrestrialControllers{
    async getTerrestrial(req, res, next){
        try {
            const data = await dbHelpers.getAllPlanet()
            res.status(200).json({
                success: true,
                data: data
            })
        } catch (error) {
            next(error)
        }
    };

    async getTerrestrialById(req, res, next){
        try {
            const data = await dbHelpers.getPlanetById(Number(req.params.id))
            if(!data){
                return next(new ErrorHandler('Planet not found', 404))
            }
            res.status(200).json({
                success: true,
                message: 'Succesfully fetched',
                data: data
            })
        } catch (error) {
            next(error)
        }
    };

    async postTerrestrial(req, res, next){
        try {
            const data = await dbHelpers.createPlanet(req.body)
            if(!data){
                return next(new ErrorHandler('Some properties are missing', 406))
            }
            res.status(201).json({
                success: true,
                message: 'Succesfully created',
                data: data
            })
        } catch (error) {
            next(error)
        }
    };

    async updateTerrestrial(req, res, next){
        try {
            const data = await dbHelpers.updatePlanetById(req.params.id, req.body)
            if(!data){
                return next(new ErrorHandler('Given planet id was not found', 404))
            }
            res.status(200).json({
                success: true,
                message: 'Succesfully updated'
            })
        } catch (error) {
            next(error)
        }
    };

    async deleteTerrestrial(req, res, next){
        try {
            const data = await dbHelpers.deleteDataById(req.params.id)
            if(!data){
                return next(new ErrorHandler('Given planet id was not found', 404))
            }
            res.status(204).json({
                success: true,
                message: 'Succesfully deleted'
            })
        } catch (error) {
            next(error)
        }
    };
};