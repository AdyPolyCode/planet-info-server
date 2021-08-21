// custom model for planet object creating
export class PlanetModel{
    constructor(id, planetObject){
        this.id = id,
        Object.assign(this, planetObject)
    }
};