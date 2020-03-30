module.exports = ({ cityService }) => ({

    execute: async (city) => {
        return await cityService.create(city);
   }
});