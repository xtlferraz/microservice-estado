module.exports = ({ stateService }) => ({

    execute: (id) => {
        return stateService.get(id);
    }
});