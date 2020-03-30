module.exports = ({ cityService }) => ({

    execute: (id) => {

            return cityService.get(id);

    }
});