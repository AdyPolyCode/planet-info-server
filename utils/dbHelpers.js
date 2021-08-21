import {PlanetModel} from '../models/planetModel.js';


export class DatabaseHelpers{
   constructor(db, collection){
      this.database = db
      this.collection = collection
   }
   
   // @check if the obj exists
   isObjectInDb(planetId){
      return this.database[this.collection].filter(item => item.id === planetId)
   };

   // @check if the given obj has valid prop types
   hasValidTypes(object){
      const {id, name, SurfaceArea, OrbitalPeriod, Radious, Mass, Moons} = object
      if (typeof id === 'number' && typeof name === 'string'
      && typeof SurfaceArea === 'string' && typeof OrbitalPeriod === 'string'
      && typeof Radious === 'string' && typeof Mass === 'string'
      && typeof Moons === 'object') return true
      return false
   };

   // @check if the given obj has valid props
   hasAllProperty(planetObject){
      const properProperties = this.hasValidTypes(planetObject)
      if (properProperties){
         return true
      }else{
         return false
      }
   };

   // @fetch the last item id in db
   getCollectionSize(){
      return this.database[this.collection].length
   };

   // @fetch all data from db
   getAllPlanet(){
      return this.database
   };

   // @fetch single data from db by id
   getPlanetById(planetId){
      if(this.isObjectInDb(planetId)){
         const item = this.database[this.collection].filter(item => item.id === planetId)
         if (item.length === 0) return null
         return item[0]
      }else{
         return false
      }
   };

   // @create a new object
   createPlanet(object){
      const newId = this.getCollectionSize() + 1
      const newModel = new PlanetModel(newId, object)
      if(this.hasAllProperty(newModel)){
         this.database[this.collection].push(newModel)
         return newModel
      }else{
         return false
      }
   };

   // @update data in db by id
   updatePlanetById(planetId, newObject){
      if(this.isObjectInDb(planetId)){
         const toUpdate = this.database[this.collection][planetId-1]
         Object.assign(toUpdate, newObject)
         return true
      }else{
         return false
      }
   };

   // @delete data from db by id
   deleteDataById(objectId){
      if (this.isObjectInDb(objectId)){
         this.database[this.collection].splice(objectId-1, 1)
         return true
      }else{
         return false
      }
   };
};