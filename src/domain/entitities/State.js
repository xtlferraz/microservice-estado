const crypto = require('crypto');

module.exports = class {

    constructor(id, name, flag, population, population_cost ) {
      this.id = id;
      this.name = name;
      this.flag = flag;
      this.population = population;
      this.population_cost = population_cost;
    }
  
};