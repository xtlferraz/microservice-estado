const bodyParser = require('./node_modules/body-parser')
const { createController } = require('./node_modules/awilix-express') // or `awilix-router-core`
const CityController = require('../presentations/state/Controllers/CityController')

module.exports = createController(CityController)
  .prefix('/city') 
  .get('/getById/:id', 'getCity') 
  .get('/all', 'getAll') 
  .put('/', 'updateCity', {
    before: [bodyParser()] 
  }) 
  .delete('/:id', 'deleteCity') 
  .post('/', 'createCity', {
    before: [bodyParser()] 
  });