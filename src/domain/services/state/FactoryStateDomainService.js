const PERSON_COST = 123.45;
const POPULATION_CUTTOF_VALUE =  50000;
const DESCONTO = 12.3;
const State = require('../../entitities/State');
const moeda = require('../../../app/utils/moeda');
module.exports = ({ }) => ({

    populationCost: (state, dolar) => {
           const { population } = state;
           const convertPersonCoast = moeda.formatValor(PERSON_COST * dolar);
           state.population_cost = moeda.formatValor(population * convertPersonCoast);
           const object = Object.assign({}, state);
           return new State(object.id, object.name, object.flag,
           object.population, object.population_cost); 
    },
    discount : (state) => {
        const { population, population_cost } = state;
        let desconto = 0;
        if(population > POPULATION_CUTTOF_VALUE){
           desconto = moeda.formatValor((population_cost * DESCONTO)/100);           
           state.population_cost =moeda.formatValor(population_cost - desconto);
        }
        const object = Object.assign({}, state);
        
        return new State(object.id, object.name, object.flag,
            object.population, object.population_cost); 
    }
    
});