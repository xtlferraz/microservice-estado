const bodyParser = require('body-parser')
const { createController } = require('awilix-express') // or `awilix-router-core`
const StateController = require('../presentations/state/Controllers/StateController')



module.exports = createController(StateController)
  .prefix('/state') 
  .get('/getById/:id', 'getState') 
  .get('/all', 'getAll') 
  .get('/image/:image', 'getImage')
  .put('/', 'updateState') 
  .delete('/:id', 'deleteState')
  .post('/','createState');