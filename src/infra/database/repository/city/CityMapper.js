const clear = require('../support/ClearObject');
const City = require('../../../../domain/entitities/City');

const CityMapper = {
    toEntity:databaseObject => {
        if (!databaseObject) return null;
        const { id, name, population_quantity, state_id } = databaseObject;
        return new City(id,name, population_quantity,state_id);   

    },
    toDatabase: domainEntity => {
        const { id, name, population_quantity, state_id } = domainEntity;

        const cityMapper = {
            id,
            name,
            population_quantity,
            state_id
        };

        clear(cityMapper);
        return cityMapper; 

    },
    toPopulation : databaseObject => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    }
}

module.exports = CityMapper;