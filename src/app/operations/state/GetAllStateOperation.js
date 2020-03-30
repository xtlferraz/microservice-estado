module.exports = ({ stateService }) => ({

    execute:async (page) => {
      return await stateService.all(page);  
    }
});