const express = require('express');
const {createContainer , InjectionMode ,asFunction, asValue}  = require('awilix');
const { loadControllers, scopePerRequest }= require('awilix-express');
const app = express();
const createError = require('http-errors');
const axios = require('axios');
const connection = require('./src/infra/database/connection/DatabaseConnection');
const factoryStateDomainService = require('./src/domain/services/state/FactoryStateDomainService');
const container = createContainer()
container.register({
  createError: asValue(createError),
  connection: asValue(connection),
  axios: asValue(axios),
  factoryStateDomainService:asFunction(factoryStateDomainService),
})
.loadModules(
  [
    'src/app/operations/**/*.js',
    'src/app/services/**/*.js',
    'src/infra/database/repository/**/*.js',
    'src/infra/integration/rest/**/*.js'
  ],
  {
      formatName: 'camelCase',
      resolverOptions: {
          injectionMode: InjectionMode.PROXY
      }
  }
);

app.use(scopePerRequest(container));
app.use(loadControllers('src/interfaces/http/routes/*.js', { cwd: __dirname }));
app.use(express.json());

const publicDir = require('path').join(__dirname,'src/interfaces/http/presentations/state/Controllers/state/uploads/');
app.use(express.static(publicDir));

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    status: error.status,
    message: error.message,
    stack: error.stack
  })
});

app.use(function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:4200/"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const porta = process.env.PORT || 3000;
app.listen(porta);

