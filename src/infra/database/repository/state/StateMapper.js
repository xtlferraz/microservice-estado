const clear = require('../support/ClearObject');
const State = require('../../../../domain/entitities/State');

const StateMapper = {
    toEntity:databaseObject => {
        if (!databaseObject) return null;
        const { id, name, flag ,population} = databaseObject;
        return new State(id, name, flag ,population | 0 );   

    },
    toDatabase: domainEntity => {
        const { id, name, flag } = domainEntity;

        const stateMapper = {
            id,
            name,
            flag
        };

        clear(stateMapper);
        return stateMapper; 

    },
    
}

module.exports = StateMapper;