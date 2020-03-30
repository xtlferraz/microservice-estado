const cityMapper = require('./CityMapper');
const limit = 5;
module.exports = ({connection}) => ({
    
    create: async (city) => {
        return await connection('city').insert(cityMapper.toDatabase(city));
    },
    all : async(page) => {
        const result = await connection('city').select('*');
        const list =result.map( result => 
            cityMapper.toEntity(result));
        return list;
    },
    total: async() => {
        const [count] = await connection('city').count();
        const total = count['count(*)'];
        return total;
    },
    get : async(id) => {
        const city = await connection('city').first('*').where('id',id);
        return cityMapper.toEntity(city);
    },
    delete:async(id) => {
        return await connection('city').where('id',id).delete();
    },
    update:async(city) => {
       
        const { id } = city;
        return await connection('city')
        .where('id', '=', id)
        .update(cityMapper.toDatabase(city));

    },
    sumCityToState:async (state_id) => {
        return cityMapper.toPopulation(await connection('city').sum('population_quantity as population').where('state_id',state_id));
    } 
});