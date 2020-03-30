module.exports = ({ stateService }) => ({

    execute: async (state) => {
         return await stateService.create(state);
    }
});