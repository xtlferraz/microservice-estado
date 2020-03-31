const stateMapper = require('./StateMapper');
module.exports = ({connection}) => ({
    
    create: async (state) => {
        return await connection('state').insert(stateMapper.toDatabase(state));
    },
    all : async() => {
        const result = await connection('state')
        .select(connection.raw('state.*, (select sum(population_quantity) as population from city where city.state_id = state.id) as population'))
        const obj = result || [];
        const list = obj.map( result => 
            stateMapper.toEntity(result));
        return list;
    },
    total: async() => {
        const [count] = await connection('state').count();
        const total = count['count(*)'];
        return total;
    },
    get : async(id) => {
        const state = await connection('state').first('*').where('id',id);
        return stateMapper.toEntity(state);
    },
    delete:async(id) => {
        return await connection('state').where('id',id).delete();
    },
    update:async(state) => {
        const {id, name, flag } = state;

        return await connection('state')
        .where('id', '=', id)
        .update({
        id: id,
        name:name,
        flag:flag
        });

    }
});