module.exports = ({ stateService }) => ({

    execute:async () => {
      return await stateService.all();  
    }
});