const City = require('../../../domain/entitities/City');

const RIO_GRANDE_DO_SUL = 'Rio Grande do Sul';
module.exports = ({ cityRepository, createError, stateRepository }) => ({

    create: async(city) => {

      const { name, population_quantity, state_id } = city;
      const citys = new City(null,name, population_quantity, state_id);
      return await cityRepository.create(citys);

    },
    get: async (id) => {

      if(!id) throw  createError(422, 'ID Undefined', null);
      return await cityRepository.get(id);

    },
    all:async () => {
      const total = await cityRepository.total();
      const data = await cityRepository.all();
      return { total:total, data:data };  
    },
    delete: async(id) => {
      if(!id)  throw createError(422, 'ID Undefined', null);
      const { state_id }  = await cityRepository.get(id);
      const { name } = await stateRepository.get(state_id);
  
     
      
      if(name.toUpperCase() === RIO_GRANDE_DO_SUL.toUpperCase() ) throw createError(422, 'It is not possible to delete cities from rio grande do sul', null);
      return await cityRepository.delete(id);
    },
    update:(city) => {
      return cityRepository.update(city);
    }
});