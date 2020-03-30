module.exports = ({ cityService }) => ({

    execute: (id) => {
      
            return cityService.delete(id);

    }
});