const crypto = require('crypto');

module.exports = class {

    constructor(id,name, population_quantity,state_id) {
      this.id = id;
      this.name = name;
      this.population_quantity = population_quantity;
      this.state_id = state_id;
    }
  
};