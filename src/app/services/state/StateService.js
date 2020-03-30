const State = require('../../../domain/entitities/State');
module.exports = ({ stateRepository, createError, cityRepository, factoryStateDomainService, olindaClient }) => ({

    create: async(state) => {

      const { name, flag } = state;
      const states = new State(null,name,flag);
      return await stateRepository.create(states);

    },
    get: async (id) => {
      if(!id) throw  createError(422, 'ID Undefined', null);
      const state = await stateRepository.get(id);
      const population = await cityRepository.sumCityToState(id);
      const statePopulation = Object.assign({},state);
      statePopulation.population = population;
      const dolar = await olindaClient.getcotacaoDolar();
      const statePopulationCost = factoryStateDomainService.populationCost(statePopulation,dolar);
      const stateDiscount = factoryStateDomainService.discount(statePopulationCost);
      return stateDiscount;

    },
    all: async () => {
      const state = await stateRepository.all();
      const total = await stateRepository.total();
      const dolar = await olindaClient.getcotacaoDolar();
      const data = state.map( s => {
        const state = factoryStateDomainService.populationCost(s,dolar);
        return factoryStateDomainService.discount(state);
      });

      return {total:total,data:data};       
    },
    delete:(id) => {
      if(!id) throw  createError(422, 'ID Undefined', null);
      return stateRepository.delete(id);
    },
    update:(state) => {
      return stateRepository.update(state);
    }
});