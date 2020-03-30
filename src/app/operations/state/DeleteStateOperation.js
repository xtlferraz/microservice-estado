module.exports = ({ stateService }) => ({

    execute: (id) => {     
            return stateService.delete(id);
    }
});