const url =  'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)'
const moment = require('moment');
//const date = moment().format('MM-DD-YYYY');
const moeda = require('../../../app/utils/moeda');
const date = '03-27-2020';
module.exports = ({ axios, createError }) => ({

    getcotacaoDolar: async () => {
        let reponseData = null;
        await axios.get(`${url}?@dataCotacao='${date}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`)
        .then(function(response){
            reponseData = response.data; 
        });  

        const value = reponseData.value;
        if(value.length > 0 ) return moeda.formatValor(value[0].cotacaoCompra);
        throw  createError(422, 'Object Empty', null);
    }
});